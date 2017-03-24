using System.Collections.Generic;
using System.Media;
using System.Web.Mvc;
using Horus.Models;

namespace Horus.Controllers
{
    public class AdminController : Controller
    {
        public ActionResult Index()
        {
            var players = new List<Player>
            {
                new Player(){Id = 1,Username = "aaa",Password = "!#$!#$!#"},
                new Player(){Id = 2,Username = "bbb",Password = "!#$!#$!#"},
                new Player(){Id = 3,Username = "ccc",Password = "!#$!#$!#"}
            };

            return View(players);
        }
    }
}