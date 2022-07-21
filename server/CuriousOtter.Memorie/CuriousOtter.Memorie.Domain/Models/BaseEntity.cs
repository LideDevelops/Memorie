using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.Domain.Models
{
    public abstract class BaseEntity<TIdentidfier> 
    {
        [Key]
        public TIdentidfier Identidfier { get; set; }
        public DateTime LastModified { get; set; }
        public BaseEntity(TIdentidfier identidfier)
        {
            this.Identidfier = identidfier;
        }
    }
}
