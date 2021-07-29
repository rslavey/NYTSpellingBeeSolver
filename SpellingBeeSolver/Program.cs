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
            
            foreach (var f in Directory.GetFiles(ConfigurationManager.AppSettings.Get("dictionaryPath")))
            {
                Console.WriteLine(string.Join(", ", File.ReadAllLines(f).Select(w => w.ToLower().Trim()).Where(w => w.All(x => al.Contains(x)) && w.Any(x => x == rl) && w.Length >= wl).Select(w => $"{w}")));
            }
        }
    }
}
