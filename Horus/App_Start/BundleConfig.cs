using System.Web.Optimization;

namespace Horus
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/Scripts/main").Include(
                "~/Scripts/main.js"));

            bundles.Add(new ScriptBundle("~/bundles/datatablesjs").Include(
                "~/Scripts/DataTables/jquery.dataTables.min.js",
                "~/Scripts/DataTables/dataTables.rowReorder.min.js",
                "~/Scripts/DataTables/dataTables.responsive..min.js"));

            bundles.Add(new StyleBundle("~/bundles/datatablescss").Include(
                "~/Content/DataTables/css/jquery.dataTables.min.css",
                "~/Content/DataTables/css/rowReorder.dataTables.min.css",
                "~/Content/DataTables/css/responsive.dataTables.min.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-theme.css",
                      "~/Content/bootstrap.min.css",
                      "~/Content/font-awesome.css",
                      "~/Content/main.css"));

            bundles.Add(new StyleBundle("~/Content/login").Include(
                "~/Content/login.css"));
        }
    }
}
