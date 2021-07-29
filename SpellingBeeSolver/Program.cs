using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;

namespace SpellingBeeSolver
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write($"All Letters: ");
            var al = Console.ReadLine();
            Console.Write($"Required Letter: ");
            var rl = Console.ReadLine()[0];
            Console.Write($"Minimum Word Length: ");
            var wl = int.Parse(Console.ReadLine());
            Console.WriteLine();
            var wordList = new List<DictEntry>();
            Dictionary<string, int> wordKVP = new();
            foreach (var f in Directory.GetFiles(ConfigurationManager.AppSettings.Get("dictionaryPath")))
            {
                Console.WriteLine(string.Join(", ", File.ReadAllLines(f).Select(w => w.ToLower().Trim()).Where(w => w.All(x => al.Contains(x)) && w.Any(x => x == rl) && w.Length >= wl).Select(w => $"{w}")));
                
                //foreach (var w in File.ReadAllLines(f).Select(w => w.ToLower().Trim()))
                //{
                //    if (w.All(x => al.Contains(x)) &&
                //        w.Any(x => x == rl) &&
                //        w.Length >= wl)
                //    {
                //        if (wordKVP.ContainsKey(w))
                //        {
                //            wordKVP[w]++;
                //        }
                //        else
                //        {
                //            wordKVP.Add(w, 1);
                //        }
                //    }
                //}

            }

            //Console.WriteLine(
            //    string.Join(", ", wordKVP
            //        .OrderByDescending(x => x.Value).ThenBy(x => x.Key).Select(x => $"{x.Key} ({x.Value})")
            //        )
            //    );
        }

        public class DictEntry
        {
            public string Word { get; set; }
            public int NumLetters { get; set; }
            public string UniqueLettersOrdered { get; set; }
            public int Instances { get; set; }
        }
    }
}
