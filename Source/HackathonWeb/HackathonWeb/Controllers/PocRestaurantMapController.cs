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
            return View(OpenDataStorage.Instance.Restaurants.ToList());
        }
    }
}