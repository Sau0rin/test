using System.ComponentModel.DataAnnotations;

namespace WebApi
{
    public class anketa
    {   
        [Key]
        public string? userName { get; set; }
        public string? fio { get; set; }

        public string? date { get; set; }
        public string? pol { get; set; }
        public string? adres { get; set; }

        public string? country { get; set; }
        public string? region { get; set; }
        public string? city { get; set; }

        public string? street { get; set; }
        public string? house { get; set; }
        public string? polisnumber { get; set; }

        public string? oms { get; set; }
        public string? phone { get; set; }
    }
}
