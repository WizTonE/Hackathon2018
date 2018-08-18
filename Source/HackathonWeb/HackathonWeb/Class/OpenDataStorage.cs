using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace HackathonWeb.Class
{
    public class OpenDataStorage
    {
        private static OpenDataStorage _instance;
        public static OpenDataStorage Instance => _instance ?? (_instance = new OpenDataStorage());

        private List<MRTElevator> _mRTElevators;
        public List<MRTElevator> MRTElevators => _mRTElevators ?? (
            _mRTElevators = File.ReadAllLines("OpenDataSource/MRTElevators.csv").Select(item =>
            {
                var data = item.Split(',');
                return new MRTElevator { Line = data[0], Station = data[1], Location = data[2] };
            }).ToList());

        private OpenDataStorage()
        {
        }
    }
}
