using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace WebApi
{
    public class specializations
    {
        [Key]
        public string name { get; set; } = string.Empty;
        public string? city { get; set; }
    }
}
