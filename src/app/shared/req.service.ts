import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ReqService {
  public headers = { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
  constructor(private http: HttpClient) { }
  // 登陆验证
  public Login(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/login', body);
  }
  // 登出
  public Logout(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/logout', body);
  }
  // 强制登出
  public ForcedLogout(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/logout-forced', body);
  }
  // 更新登录时间
  public SidUpdate(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/sid-update', body);
  }
  // 登录用户信息查询
  public getUserInfo(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/query-self', body);
  }
  // 登录用户信息修改
  public UserInfoModify(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/update-self', body);
  }

  // 登陆验证
  public getDepartment(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/department/find', body);
  }

  // 生产线查询
  public getDeviceProductionLine(body): Observable<any> {
    return this.http.post(
      'http://120.78.137.182/element/production-system/find', body, this.headers);
  }
  // 生产线增加
  public DeviceProductionLineAdd(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-system/add', body, this.headers);
  }
  // 生产线删除
  public DeviceProductionLineDelete(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-system/delete', body, this.headers);
  }
  // 生产线修改
  public DeviceProductionLineModify(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-system/update', body, this.headers);
  }


  // 设备数据查询
  public getDeviceProductionData(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-device/find', body, this.headers);
  }
  // 设备数据增加
  public DeviceProductionDataAdd(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-device/add', body, this.headers);
  }
  // 设备数据删除
  public DeviceProductionDataDelete(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-device/delete', body, this.headers);
  }
  // 设备数据修改
  public DeviceProductionDataModify(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-device/update', body, this.headers);
  }


  // 模块数据查询
  public getDeviceProductionIcm(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-modular/find', body, this.headers);
  }
  // 模块数据增加
  public DeviceProductionIcmAdd(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-modular/add', body, this.headers);
  }
  // 模块数据删除
  public DeviceProductionIcmDelete(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-modular/delete', body, this.headers);
  }
  // 模块数据修改
  public DeviceProductionIcmModify(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-modular/update', body, this.headers);
  }

  // 传感器数据查询
  public getDeviceProductionSensor(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-sensor/find', body, this.headers);
  }
  // 传感器数据增加
  public DeviceProductionSensorAdd(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-sensor/add', body, this.headers);
  }
  // 传感器数据删除
  public DeviceProductionSensorDelete(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-sensor/delete', body, this.headers);
  }
  // 传感器数据修改
  public DeviceProductionSensorModify(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/production-sensor/update', body, this.headers);
  }
// 模块管理查询
  public getJurisdictionModalManagerQuery(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/module/find', body, this.headers);
  }
// 模块管理增加
  public JurisdictionModalManagerAdd(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/module/add', body, this.headers);
  }
// 模块管理删除
  public JurisdictionModalManagerDelete(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/module/delete', body, this.headers);
  }
// 模块管理修改
  public JurisdictionModalManagerModify(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/module/update', body, this.headers);
  }
  // 按钮管理查询
  public getJurisdictionBtnManager(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/button/find', body, this.headers);
  }
  // 按钮管理增加
  public JurisdictionBtnManagerAdd(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/button/add', body, this.headers);
  }
  // 按钮管理删除
  public JurisdictionBtnManagerDelete(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/button/delete', body, this.headers);
  }
  // 按钮管理修改
  public JurisdictionBtnManagerModify(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/button/update', body, this.headers);
  }


  // 接口管理查询
  public JurisdictionInterfaceManager(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/interfaces/find', body, this.headers);
  }
  // 接口管理增加
  public JurisdictionInterfaceManagerAdd(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/interfaces/add', body, this.headers);
  }
  // 接口管理删除
  public JurisdictionInterfaceManagerDelete(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/interfaces/delete', body, this.headers);
  }
  // 接口管理修改
  public JurisdictionInterfaceManagerModify(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/interfaces/update', body, this.headers);
  }


  // 用户权限管理查询
  public getJurisdictionuUserPower(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/power/find', body, this.headers);
  }
  // 用户权限管理增加
  public JurisdictionuUserPowerAdd(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/power/add', body, this.headers);
  }
  // 用户权限管理删除
  public JurisdictionuUserPowerDelete(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/power/delete', body, this.headers);
  }
  // 用户权限管理修改
  public JurisdictionuUserPowerModify(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/power/update', body, this.headers);
  }

  // 用户数量查询
  public getUsersManagerCount(): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/query-count', null, this.headers);
  }
  // 用户管理查询
  public getUsersManager(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/query', body);
  }
  // 用户管理增加
  public UsersManagerAdd(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/add', body);
  }
  // 用户管理删除
  public UsersManagerDelete(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/delete', body);
  }
  // 用户管理修改
  public UsersManagerModify(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/update', body);
  }

  // 组织管理查看
  public findOrganization(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/organization/find', body, this.headers);
  }
  // 组织管理增加
  public addOrganization(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/organization/add', body, this.headers);
  }
  // 组织管理删除
  public deleteOrganization(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/organization/delete', body, this.headers);
  }
  // 组织管理修改
  public updateOrganization(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/organization/update', body, this.headers);
  }

  // 部门管理查看
  public findDepartment(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/department/find', body, this.headers);
  }

  // 部门管理增加
  public addDepartment(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/department/add', body, this.headers);
  }

  // 部门管理删除
  public deleteDepartment(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/department/delete', body, this.headers);
  }

  // 部门管理修改
  public updateDepartment(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/department/update', body, this.headers);
  }



  // 视频管理组的查看
  public findVideomanager(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/SelectCameraGroup', body, this.headers);
  }
  // 视频管理组的增加
  public addVideomanager(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/AddCameraGroup', body, this.headers);
  }
  // 视频管理组的修改
  public updateVideomanager(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/UpdateCameraGroup', body, this.headers);
  }
  // 视频管理组的删除
  public deleteVideomanager(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/DeleteCameraGroup', body, this.headers);
  }

  // 视频管理的查看(按页)
  public findVideoPage(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/SelectCamera', body, this.headers);
  }
  // 视频管理的查看(按组)
  public findVideos(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/QueryCamera', body, this.headers);
  }
  // 视频管理的增加
  public addVideo(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/AddCamera', body, this.headers);
  }
  // 视频管理的修改
  public updateVideo(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/UpdateCamera', body, this.headers);
  }
  // 视频管理的删除
  public deleteVideo(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element/DeleteCamera', body, this.headers);
  }
  // app 上传app
  public AppUpload(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/version/an-upload', body);
  }
  // app查询
  public getAppInfo(): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/version/an-query', null);
  }
// 查看工艺包订单编号
  public FindTechnologyOrdercode(): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/technics/product-data-find-order-code', null, this.headers);
  }
  // 工艺包查看
  public FindTechnology(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/technics/product-data-query', body);
  }
  // 工艺包增加
  public AddTechnology(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/technics/product-data-create', body);
  }
  // 工艺包修改
  public UpdateTechnology(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/technics/product-data-alert', body);
  }
  // 工艺包删除
  public DeleteTechnology(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/technics/product-data-delete', body);
  }
  // 新增系数修正默认工艺包
  public AddTechnicsPackAmend(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/add-technics-pack-amend', body);
  }
  // 更新系数修正工艺参数包
  public UpdateTechnicsPackAmend(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/update-technics-pack-amend', body);
  }
  // 查看工艺包
  public FindTechnicsPackAmend(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/find-technics-pack-amend', body, this.headers);
  }
  // 删除工艺参数包
  public DeleteTechnicsPackAmend(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/delete-technics-pack-amend', body, this.headers);
  }
  // 新增系数修正默认工艺包温度
  public AddTechnicsPackTemperature(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/add-technics-pack-temperature', body);
  }
  // 更新系数修正工艺参数包温度
  public UpdateTechnicsPackTemperature(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/update-technics-pack-temperature', body);
  }
  // 查看温度工艺包
  public FindTechnicsPackTemperature(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/find-technics-pack-temperature', body, this.headers);
  }
  // 删除温度参数工艺包
  public DeleteTechnicsPackTemperature(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/delete-technics-pack-temperature', body, this.headers);
  }
//  以下是查看父id请求
  // 组织和部门ID
  public FindDepartOrgani(): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/department/tree', null, this.headers);
  }
  // 查看用户信息数据
  public FinduserIdname(): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/find-user-id-name', null, this.headers);
  }
  // 查看模块信息数据
  public FindmoduleIdname(): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/module/find-module-id-name', null, this.headers);
  }
  // 查看生产线系统信息数据
  public FindsystemSysid(): Observable<any> {
    return this.http.post('http://120.78.137.182/element/find-system-sysid', null, this.headers);
  }
  // 查看生产线模块信息数据
  public FindmodularMid(): Observable<any> {
    return this.http.post('http://120.78.137.182/element/find-modular-mid', null, this.headers);
  }
  // 查看生产线设备信息数据
  public FindDeviceDeviceid(): Observable<any> {
    return this.http.post('http://120.78.137.182/element/find-device-deviceid', null, this.headers);
  }

}
