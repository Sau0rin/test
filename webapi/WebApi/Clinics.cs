using System.ComponentModel.DataAnnotations;

namespace WebApi
{
    public class Clinics
    {
        [Key]
       public string?  name { get; set; }
        public string? city { get; set; }
        public string? adres { get; set; }
        public string? phone { get; set; }
        public string? foto { get; set; }

    }
}
