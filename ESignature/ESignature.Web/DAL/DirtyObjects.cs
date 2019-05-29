using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ESignature.DAL
{

    public static class LoginInfo
    {
        public static UserRole UserRoles { get; set; }
        public static Role Role { get; set; }
        public static User User { get; set; }
        public static string UserName { get; set; }
        public static string Password { get; set; }
        public static  int? CompanyID { get; set; }
        public static bool IsAdmin { get; set; }
        public static string[] Locations { get; set; }
    }

    public static class DirtyObjects
    {
        public static SignatureEntities db = new SignatureEntities();
        public static void FillUserData(string userName)
        {            
            try
            {
                LoginInfo.CompanyID = 0;
                LoginInfo.Locations = null;
                LoginInfo.Role = null;
                LoginInfo.User = null;
                LoginInfo.UserRoles = null;
                User user = db.Users.Where(x => x.Username == userName).FirstOrDefault();
                LoginInfo.User = user;
                LoginInfo.UserRoles = db.UserRoles.Where(x => x.UserId == user.UserId).FirstOrDefault();
                LoginInfo.Role = db.Roles.Where(x => x.RoleId == LoginInfo.UserRoles.RoleId).FirstOrDefault();
                LoginInfo.CompanyID =LoginInfo.Role.CompnayMasterID;
                LoginInfo.Locations = LoginInfo.Role.Locations.Split(',').ToArray();
            }
            catch {  }
        }
    }
}