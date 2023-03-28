using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly appContext _context;
        public UsersController(appContext context)
        {
            _context = context;
        }

        [HttpGet("{login},{password}")]
        public async Task<ActionResult<List<Users>>> GetUser(string login , string password)
        {

            var dbusers = await _context.users.FindAsync(login ,password);
            if (dbusers == null)
                return BadRequest("Пользователь не найден");

            dbusers.login = login;
            dbusers.password = password;
            
            return Ok( dbusers);

        }

        [HttpPost]
        public async Task<ActionResult<List<Users>>> CreateUsers(Users users)
        {
            _context.users.Add(users);
            await _context.SaveChangesAsync();
            return Ok(await _context.users.ToListAsync());
        }

        [HttpPut]

        public async Task<ActionResult<List<Users>>> UpdateUsers(Users users)
        {
            var dbusers = await _context.users.FindAsync(users.login);
            if (dbusers == null)
                return BadRequest("Пользователь не найден");

            dbusers.password = users.password;
            dbusers.role = users.role;

            await _context.SaveChangesAsync();
            return Ok(await _context.users.ToListAsync());
        }

        [HttpDelete("{login}")]
        public async Task<ActionResult<List<Users>>> DeliteUsers(string login)
        {
            var dbusers = await _context.users.FindAsync(login);
            if (dbusers == null)
                return BadRequest("Пользователь не найден");

            _context.users.Remove(dbusers);
            await _context.SaveChangesAsync();
            return Ok(await _context.users.ToListAsync());
        }

    }
}
