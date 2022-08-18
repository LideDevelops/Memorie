using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.Domain.Models
{
    public class NotADeckMemorieDeck : MemorieDeck
    {
        public NotADeckMemorieDeck() : base(-1, "NotADeck")
        {
            LastModified = DateTime.MinValue;
        }
    }
}
