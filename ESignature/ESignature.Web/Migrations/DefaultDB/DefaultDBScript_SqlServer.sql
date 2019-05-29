INSERT INTO Roles VALUES ('Employee')
INSERT INTO Roles VALUES ('Organization')

INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Employee'),'Default:OrginizationEmployee:View')
INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Employee'),'Northwind:General')

INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Organization'),'Administration:Security')
INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Organization'),'Default:Organization:Delete')

INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Organization'),'Default:Organization:Modify')
INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Organization'),'Default:Organization:View')

INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Organization'),'Default:OrganizationAccessPoints:Delete')
INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Organization'),'Default:OrganizationAccessPoints:Modify')

INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Organization'),'Default:OrganizationAccessPoints:View')
INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Organization'),'Default:OrginizationEmployee:Delete')

INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Organization'),'Default:OrginizationEmployee:Modify')
INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Organization'),'Default:OrginizationEmployee:View')

INSERT INTO RolePermissions 
VALUES ((SELECT RoleID from Roles WHERE RoleName='Organization'),'Northwind:General')
