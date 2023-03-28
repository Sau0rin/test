using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class recordsController : ControllerBase
    {
        private readonly appContext _context;
        public recordsController(appContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<records>>> Getrecords()
        {
       
            return Ok(await _context.records.ToListAsync());

        }

        [HttpPost]
        public async Task<ActionResult<List<records>>> Createrecords(records records)
        {
            _context.records.Add(records);
            await _context.SaveChangesAsync();
            return Ok(await _context.records.ToListAsync());
        }

        [HttpPut]

        public async Task<ActionResult<List<records>>> Updaterecords(records records)
        {
            var dbrecords = await _context.records.FindAsync(records.fio);
            if (dbrecords == null)
                return BadRequest("Анкета не найдена");

            dbrecords.fio = records.fio;
            dbrecords.date = records.date;
            dbrecords.pol = records.pol;
            dbrecords.adres = records.adres;
            dbrecords.country = records.country;
            dbrecords.region = records.region;
            dbrecords.city = records.city;
            dbrecords.street = records.street;
            dbrecords.house = records.house;
            dbrecords.polisnumber = records.polisnumber;
            dbrecords.oms = records.oms;
            dbrecords.phone = records.phone;


            await _context.SaveChangesAsync();
            return Ok(await _context.records.ToListAsync());
        }

        [HttpDelete("{fio}")]
        public async Task<ActionResult<List<records>>> Deliterecords(string fio)
        {
            var dbrecords = await _context.records.FindAsync(fio);
            if (dbrecords == null)
                return BadRequest("Анкета не найдена");

            _context.records.Remove(dbrecords);
            await _context.SaveChangesAsync();
            return Ok(await _context.records.ToListAsync());
        }
    }
}
