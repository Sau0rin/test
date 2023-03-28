using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        private readonly appContext _context;
        public DoctorsController(appContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Doctors>>> Getdoctors()
        {
            return Ok(await _context.Doctors.ToListAsync());

        }

        [HttpPost]
        public async Task<ActionResult<List<Doctors>>> CreateDoctor(Doctors doctor)
        {
            _context.Doctors.Add(doctor);
            await _context.SaveChangesAsync();
            return Ok(await _context.Doctors.ToListAsync());
        }

        [HttpPut]

        public async Task<ActionResult<List<Doctors>>> UpdateDoctors(Doctors doctors)
        {
            var dbDoctor = await _context.Doctors.FindAsync(doctors.FIO);
            if (dbDoctor == null)
                return BadRequest("Доктор не найден");

            dbDoctor.FIO = doctors.FIO;
            dbDoctor.litleInfo = doctors.litleInfo;
            dbDoctor.fullInfo = doctors.fullInfo;
            dbDoctor.specializations = doctors.specializations;
            dbDoctor.foto = doctors.foto;
            dbDoctor.clinic = doctors.clinic;
            await _context.SaveChangesAsync();
            return Ok(await _context.Doctors.ToListAsync());
        }

        [HttpDelete("{FIO}")]
        public async Task<ActionResult<List<Doctors>>> DeliteDoctors(string FIO)
        {
            var dbDoctor = await _context.Doctors.FindAsync(FIO);
            if (dbDoctor == null)
                return BadRequest("Доктор не найден");

            _context.Doctors.Remove(dbDoctor);
            await _context.SaveChangesAsync();
            return Ok(await _context.Doctors.ToListAsync());
        }

    }

}
