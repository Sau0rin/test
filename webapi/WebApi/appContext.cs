using Microsoft.EntityFrameworkCore;


namespace WebApi
{
    public class appContext:DbContext
    {

        public appContext(DbContextOptions<appContext> options) : base(options)
        {

        }

        public DbSet<specializations> specializations => Set<specializations>();
        public DbSet<Doctors> Doctors => Set<Doctors>();
        public DbSet<Users> users => Set<Users>();
        public DbSet<Clinics> clinics => Set<Clinics>();
        public DbSet<anketa> anketa => Set<anketa>();
        public DbSet<records> records => Set<records>();

    }
}
