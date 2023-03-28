using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class anketaController : ControllerBase
    {
        private readonly appContext _context;
        public anketaController(appContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<anketa>>> Getanketa()
        {
            return Ok(await _context.anketa.ToListAsync());

        }

        [HttpPost]
        public async Task<ActionResult<List<anketa>>> Createanketa(anketa anketa)
        {
            _context.anketa.Add(anketa);
            await _context.SaveChangesAsync();
            return Ok(await _context.anketa.ToListAsync());
        }

        [HttpPut]

        public async Task<ActionResult<List<anketa>>> Updateanketa(anketa anketa)
        {
            var dbanketa = await _context.anketa.FindAsync(anketa.fio);
            if (dbanketa == null)
                return BadRequest("Анкета не найдена");

            dbanketa.fio = anketa.fio;
            dbanketa.date = anketa.date;
            dbanketa.pol = anketa.pol;
            dbanketa.adres = anketa.adres;
            dbanketa.country = anketa.country;
            dbanketa.region = anketa.region;
            dbanketa.city = anketa.city;
            dbanketa.street = anketa.street;
            dbanketa.house = anketa.house;
            dbanketa.polisnumber = anketa.polisnumber;
            dbanketa.oms = anketa.oms;
            dbanketa.phone = anketa.phone;


            await _context.SaveChangesAsync();
            return Ok(await _context.anketa.ToListAsync());
        }

        [HttpDelete("{fio}")]
        public async Task<ActionResult<List<anketa>>> Deliteanketa(string fio)
        {
            var dbanketa = await _context.anketa.FindAsync(fio);
            if (dbanketa == null)
                return BadRequest("Анкета не найдена");

            _context.anketa.Remove(dbanketa);
            await _context.SaveChangesAsync();
            return Ok(await _context.anketa.ToListAsync());
        }
    }
}
