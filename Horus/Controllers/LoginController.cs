﻿using System.Web.Mvc;

namespace Horus.Controllers
{
    public class LoginController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login()
        {
            return RedirectToAction("index", "home");
        }
    }
}