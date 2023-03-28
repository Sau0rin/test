using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicsController : ControllerBase
    {

        private readonly appContext _context;
        public ClinicsController(appContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Clinics>>> GetClinics()
        {
            return Ok(await _context.clinics.ToListAsync());

        }

        [HttpPost]
        public async Task<ActionResult<List<Clinics>>> CreateClinics(Clinics clinics)
        {
            _context.clinics.Add(clinics);
            await _context.SaveChangesAsync();
            return Ok(await _context.clinics.ToListAsync());
        }

        [HttpPut]

        public async Task<ActionResult<List<Clinics>>> UpdateClinics(Clinics clinics)
        {
            var dbclinics = await _context.clinics.FindAsync(clinics.name);
            if (dbclinics == null)
                return BadRequest("Клиника не найдена");

            dbclinics.name = clinics.name;
            dbclinics.city = clinics.city;
            dbclinics.adres = clinics.adres;
            dbclinics.phone = clinics.phone;
            dbclinics.foto = clinics.foto;

            await _context.SaveChangesAsync();
            return Ok(await _context.clinics.ToListAsync());
        }

        [HttpDelete("{name}")]
        public async Task<ActionResult<List<Clinics>>> DeliteClinics(string name)
        {
            var dbspdbclinics = await _context.clinics.FindAsync(name);
            if (dbspdbclinics == null)
                return BadRequest("Клиника не найдена");

            _context.clinics.Remove(dbspdbclinics);
            await _context.SaveChangesAsync();
            return Ok(await _context.clinics.ToListAsync());
        }

    }
}
