using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.Domain.Models
{
    public class MemorieDeck : BaseEntity<int>
    {
        public virtual ICollection<MemorieCard> CardsWithoutDoubles { get; set; }
        public virtual string Name { get; set; }
        public MemorieDeck(int identidfier, string name) : base(identidfier)
        {
            CardsWithoutDoubles = new List<MemorieCard>();
            this.Name = name;
        }
    }
}
