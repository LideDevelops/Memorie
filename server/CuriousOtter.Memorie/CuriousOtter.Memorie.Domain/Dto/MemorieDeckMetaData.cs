using CuriousOtter.Memorie.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.Domain.Dto
{
    public class MemorieDeckMetaData
    {
        public int Identifier { get; }
        public string Name { get; }
        public MemorieDeckMetaData(MemorieDeck deck)
        {
            Identifier = deck.Identidfier;
            Name = deck.Name;
        }

        public MemorieDeckMetaData(int identifier, string name)
        {
            Identifier = identifier;
            Name = name;
        }
    }
}
