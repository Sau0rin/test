using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace WebApi
{[PrimaryKey(nameof(login),nameof(password))]
    public class Users
    {
        
        public string? login { get; set; }
        
        public string? password { get; set; }
        public string? role { get; set; }

    }
}
