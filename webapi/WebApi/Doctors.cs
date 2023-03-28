using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace WebApi
{
    
    public class Doctors
    {
        [Key]
        public string? FIO { get; set; }
        public string? litleInfo { get; set; }
        public string? fullInfo { get; set; }
        public string? specializations { get; set; }
        public string? foto { get; set; }
        public string? clinic { get; set; }

    }
}
