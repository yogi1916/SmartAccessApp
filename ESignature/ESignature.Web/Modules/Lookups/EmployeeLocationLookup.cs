
namespace SmartCommandControl.Northwind.Lookups
{
    using ESignature.DAL;
    using ESignature.Default.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript(Expiration = -1)]
    public class EmployeeLocationLookup : RowLookupScript<CompanyLocationsRow>
    {
        public EmployeeLocationLookup()
        {
            IdField = CompanyLocationsRow.Fields.CompanyLocationId.PropertyName;
            TextField = CompanyLocationsRow.Fields.LocationMasterLocationName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            if (LoginInfo.CompanyID == null || LoginInfo.CompanyID == 0)
            {
                var fld = CompanyLocationsRow.Fields;
                query.Distinct(true)
                    .Select(fld.CompanyLocationId, fld.LocationMasterLocationName);
            }
            else
            {
                if (LoginInfo.Locations == null)
                {
                    var fld = CompanyLocationsRow.Fields;
                    query.Distinct(true)
                        .Select(fld.CompanyLocationId, fld.LocationMasterLocationName)
                           .Where(fld.CompanyMasterId == LoginInfo.CompanyID.ToString());
                }
                else
                {
                    var fld = CompanyLocationsRow.Fields;
                    query.Distinct(true)
                        .Select(fld.CompanyLocationId, fld.LocationMasterLocationName)
                           .Where(fld.CompanyMasterId == LoginInfo.CompanyID.ToString() && fld.CompanyLocationId.In(LoginInfo.Locations));
                }
            }
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            base.ApplyOrder(query);
        }
    }
}