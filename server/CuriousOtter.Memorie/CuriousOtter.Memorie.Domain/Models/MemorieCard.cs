﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.Domain.Models
{
    public class MemorieCard : BaseEntity<int>
    {
        public string Name { get; set; } = "";

        public MemorieCard(int id) : base(id)
        {

        }
    }
}
