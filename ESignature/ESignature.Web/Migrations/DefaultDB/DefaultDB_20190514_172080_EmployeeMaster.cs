using FluentMigrator;
using System;

namespace ESignature.Migrations.DefaultDB
{
    [Migration(20190514172080)]
    public class DefaultDB_20190514_172080_EmployeeMaster : AutoReversingMigration
    {
        //Author: Yogesh Jadhav
        public override void Up()
        {
            Create.Table("EmployeeMaster")
                .WithColumn("EmployeeMasterID").AsInt32().PrimaryKey().NotNullable().Identity()
                .WithColumn("EmployeeCode").AsString(100).NotNullable().Unique()
                .WithColumn("SalutationID").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_Salutation_SalutationID", "Salutation", "SalutationID")
                .WithColumn("DepartmentID").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_Departments_DepartmentID", "Departments", "DepartmentID")
                .WithColumn("CompanyLocationID").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_CompanyLocations_CompanyLocationID", "CompanyLocations", "CompanyLocationID")
                .WithColumn("DesignationID").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_Designations_DesignationID", "Designations", "DesignationID")
                .WithColumn("GenderID").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_Gender_GenderID", "Gender", "GenderID")
                .WithColumn("DivisionID").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_Division_DivisionID", "DivisionMaster", "DivisionID")
                .WithColumn("SubDepartmentID").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_SubDepartments_SubDepartmentID", "SubDepartments", "SubDepartmentID")
                .WithColumn("MaretialStatusID").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_MaretialStatus_MaretialStatusID", "MaretialStatus", "MaretialStatusID")
                .WithColumn("EmployeeTypeID").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_EmployeeType_EmployeeTypeID", "EmployeeType", "EmployeeTypeID")
                .WithColumn("EmploymentTypeID").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_EmploymentTypes_1_EmploymentTypeID", "EmploymentTypes", "EmploymentTypeID")
                .WithColumn("BloodGroupID").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeMaster_BloodGroups_BloodGroupID", "BloodGroups", "BloodGroupID")
                .WithColumn("CompanyMasterID").AsInt32().Nullable()
                    .ForeignKey("FK_EmployeeMaster_CompanyMaster_CompanyMasterID", "CompanyMaster", "CompanyMasterID")
                .WithColumn("FirstName").AsString(100).NotNullable()
                .WithColumn("MiddleName").AsString(100).Nullable()
                .WithColumn("LastName").AsString(100).Nullable()
                .WithColumn("MobileNumber").AsString(25).Nullable()
                .WithColumn("City").AsString(50).Nullable()
                .WithColumn("State").AsString(50).Nullable()
                .WithColumn("Country").AsString(50).Nullable()
                .WithColumn("Address").AsString(5000).Nullable()
                .WithColumn("DateofBirth").AsDateTime().Nullable()
                .WithColumn("DateOfJoining").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("ResignDate").AsDateTime().Nullable()
                .WithColumn("EmailAddress").AsString(50).Nullable()
                .WithColumn("Email").AsString(50).Nullable()
                .WithColumn("ManagerID").AsInt32().Nullable()
                .WithColumn("AadharCardNo").AsString(50).Nullable()
                .WithColumn("IsExpiryAllowed").AsBoolean().WithDefaultValue(false)
                .WithColumn("CardExpiry").AsDateTime().Nullable()
                .WithColumn("PhotoPath").AsString(1000).Nullable()
                .WithColumn("MarkDeleted").AsBoolean().WithDefaultValue(false)
                .WithColumn("Extra1").AsString(1000).Nullable()
                .WithColumn("Extra2").AsString(1000).Nullable()
                .WithColumn("Extra3").AsString(1000).Nullable()
                .WithColumn("Extra4").AsString(1000).Nullable()
                .WithColumn("Extra5").AsString(1000).Nullable()
                .WithColumn("IsEmployeeLogin").AsBoolean().WithDefaultValue(true); ;
        }
    }
}