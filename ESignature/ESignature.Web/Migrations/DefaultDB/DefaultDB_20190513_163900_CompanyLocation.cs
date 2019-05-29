using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{

    [Migration(20190513163900)]
    public class DefaultDB_20190513_163900_CompanyLocation : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("CompanyLocations")
                .WithColumn("CompanyLocationID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("CompanyMasterID").AsInt32().NotNullable()
                .ForeignKey("FK_CompanyLocation_CompanyMaster_CompanyMasterID", "CompanyMaster", "CompanyMasterID")
                .WithColumn("LocationMasterID").AsInt32().NotNullable()
                .ForeignKey("FK_CompanyLocations_LocationMaster_LocationMasterID", "LocationMaster", "LocationMasterID")
                .WithColumn("CreatedDateTime").AsDateTime().WithDefault(SystemMethods.CurrentDateTime)
                .WithColumn("MarkDeleted").AsBoolean().WithDefaultValue(false);
        }
    }
}