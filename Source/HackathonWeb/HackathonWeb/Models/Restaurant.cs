using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HackathonWeb.Models
{
    public class Restaurant
    {
        public string Name { get; set; }
        public string SubName { get; set; }
        public string Introduction { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
        public string Recommand { get; set; }
        public string City { get; set; }
        public string District { get; set; }
        public string Time { get; set; }
        public string Price { get; set; }
        public string BathroomInfo { get; set; }
        public string CarParkInfo { get; set; }
        public string Wifi { get; set; }
        public string Charger { get; set; }
        public string Type { get; set; }
        public string FriendlyInfo { get; set; }
    }
}