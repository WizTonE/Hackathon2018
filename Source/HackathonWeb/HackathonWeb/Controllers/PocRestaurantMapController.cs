using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HackathonWeb.Models;

namespace HackathonWeb.Controllers
{
    public class PocRestaurantMapController : Controller
    {
        // GET: Poc
        public ActionResult Index()
        {
            List<Restaurant> restaurantLocation = new List<Restaurant>();
            //Restaurant data = new Restaurant();
            //data.Address = "台北市中山區中山北路二段36巷18號";
            //restaurantLocation.Add(data);
            foreach (Restaurant data in OpenDataStorage.Instance.Restaurants)
            {
                restaurantLocation.Add(data);
            }

            return View(restaurantLocation.ToList());
        }
    }
}