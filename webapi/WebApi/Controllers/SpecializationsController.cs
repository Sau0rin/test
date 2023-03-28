using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpecializationsController : ControllerBase
    {

        private readonly appContext _context;
        public SpecializationsController(appContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<specializations>>> Getspetializations()
        {
            return Ok(await _context.specializations.ToListAsync());
          
        }

        [HttpPost]
        public async Task<ActionResult<List<specializations>>> CreateSpecializations(specializations specializations)
        {
            _context.specializations.Add(specializations);
            await _context.SaveChangesAsync();
            return Ok(await _context.specializations.ToListAsync());
        }

        [HttpPut]

        public async Task<ActionResult<List<specializations>>> UpdateSpecializations(specializations specializations)
        {
            var dbspecializations = await _context.specializations.FindAsync(specializations.name);
            if (dbspecializations == null)
                return BadRequest("Специализация не найдена");

            dbspecializations.name = specializations.name;
            dbspecializations.city = specializations.city;

            await _context.SaveChangesAsync();
            return Ok(await _context.specializations.ToListAsync());
        }

        [HttpDelete("{name}")]
        public async Task<ActionResult<List<specializations>>> DeliteSpecializations(string name)
        {
            var dbspecializations = await _context.specializations.FindAsync(name);
            if (dbspecializations == null)
                return BadRequest("Специализация не найдена");

            _context.specializations.Remove(dbspecializations);
            await _context.SaveChangesAsync();
            return Ok(await _context.specializations.ToListAsync());
        }

    }
}
