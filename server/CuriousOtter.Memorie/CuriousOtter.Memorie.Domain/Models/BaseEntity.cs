using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.Domain.Models
{
    public abstract class BaseEntityy<TIdentidfier> 
    {
        public DateTime LastModified { get; set; }
    }
}
