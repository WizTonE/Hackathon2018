using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HackathonWeb.Models
{
    public class Info
    {
        public string Name { get; set; }
        public string Distinct { get; set; }
        public int TotalRooms { get; set; }
        public int ConvenienceRooms { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Website { get; set; }
        public string NormalFriendlyService { get; set; }
        public string VisualFriendlyService { get; set; }
        public string HearingFreidlyService { get; set; }
        public string MaternalChildService { get; set; }
        public string OldAgeService { get; set; }
        public string WheelFriendlyService { get; set; }
        public string ConvenienceSpace { get; set; }
        public int ParkingSpace { get; set; }
        public int ConvenienceParkingSpace { get; set; }
        public string Introduce { get; set; }
    }

    public class RoomType
    {
        public string Name { get; set; }
        public string AddBedService { get; set; }
        public string NumberOfPeople { get; set; }
        public string FriendlyType { get; set; }
        public string RoomEquipment { get; set; }
        public string ShowerRoomEntry { get; set; }
        public string ShowerRoomDoorWidth { get; set; }
        public string ShowerRoomDoorType { get; set; }
        public string BathroomDoorType { get; set; }
        public string ShowerRoomEquip { get; set; }
        public string BathroomEquip { get; set; }
        public List<string> Pictures { get; set; }
    }

    public class Lobby
    {
        public string Entry { get; set; }
        public string Counter { get; set; }
        public List<string> Pictures { get; set; }
    }

    public class ConveninceBathroom
    {
        public int Number { get; set; }
        public string Position { get; set; }
        public string CleanLevel { get; set; }
        public string Equipment { get; set; }
        public string OtherEquipment { get; set; }
        public List<string> Pictures { get; set; }
    }

    public class ConveninceElevator
    {
        public int Number { get; set; }
        public string Equipment { get; set; }
        public List<string> Pictures { get; set; }
    }

    public class HotelRestaurant
    {
        public string Name { get; set; }
        public string Times { get; set; }
        public string Types { get; set; }
        public string Position { get; set; }
        public string Equipment { get; set; }
        public List<string> Pictures{ get; set; }
    }

    public class Hotel
    {
        public int ID { get; set; }
        public string govarea { get; set; }
        public string Name { get; set; }
        public string Area { get; set; }
        public string Distinct { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public int ConvenienceRooms { get; set; }
        public Info Basicinfo { get; set; }
        public List<RoomType> Rooms { get; set; }
        public Lobby Gate { get; set; }
        public List<ConveninceBathroom> ConveninceBathrooms { get; set; }
        public List<ConveninceElevator> ConveninceElevators { get; set; }
        public List<HotelRestaurant> HotelRestaurants { get; set; }
    }
}