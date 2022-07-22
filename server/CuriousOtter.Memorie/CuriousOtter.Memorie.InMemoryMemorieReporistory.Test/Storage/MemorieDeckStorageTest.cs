using CuriousOtter.Memorie.Domain.Models;
using CuriousOtter.Memorie.InMemoryMemorieReporistory.Storage;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.InMemoryMemorieReporistory.Test.Storage
{
    [TestFixture]
    public class MemorieDeckStorageTest
    {
        MemorieDeckStorage testee;
        private ReadOnlyCollection<MemorieDeck> InitialDeckCollection = new List<MemorieDeck>
        {
            new MemorieDeck(1)
            {
                LastModified = DateTime.Now,
            }
        }.AsReadOnly();

        [SetUp]
        public void SetUp()
        {
            testee = new MemorieDeckStorage(InitialDeckCollection);
        }

        [Test]
        public void GetMemorieCard_Test()
        {
            var result = testee.GetMemorieCards();
            Assert.NotNull(result);
            Assert.IsNotEmpty(result);
            Assert.AreEqual(1, result.Count());
        }
    }
}
