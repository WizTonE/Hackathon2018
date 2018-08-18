using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using HackathonWeb.Models;

namespace HackathonWeb
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

        private List<Restaurant> _restaurants;
        public List<Restaurant> Restaurants =>  _restaurants ?? (
            _restaurants = File.ReadAllLines("OpenDataSource/res_tpe_opendata.csv").Select(item =>
            {
                var data = item.Split(',');
                return new Restaurant
                {
                    Name = data[0],
                    SubName = data[1],
                    Introduction=data[2],
                    Phone = data[3],
                    Address = data[4],
                    Longitude = data[5],
                    Latitude = data[6],
                    Recommand = data[7],
                    City = data[8],
                    District = data[9],
                    Time = data[10],
                    Price = data[11],
                    BathroomInfo = data[12],
                    CarParkInfo = data[13],
                    Wifi = data[14],
                    Charger = data[15],
                    Type = data[16],
                    FriendlyInfo = data[17]
                };
            }).ToList());

        private OpenDataStorage()
        {
        }
    }
}
