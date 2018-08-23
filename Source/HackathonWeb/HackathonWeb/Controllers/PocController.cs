using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HackathonWeb.Controllers
{
    public class PocController : Controller
    {
        // GET: Poc
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetHotelList()
        {
            return View(OpenDataStorage.Instance.Hotels);
        }
    }
}