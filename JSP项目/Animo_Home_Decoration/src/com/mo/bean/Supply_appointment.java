package com.mo.bean;

import java.util.Date;

public class Supply_appointment {

	private String id;//编号
	private String user_id;//用户编号
	private String supply_id;//公司编号
	private String name;//称呼
	private String phone;//手机号
	private String plot_name;//小区名称
	private float area;//建筑面积
	private String way;//装修方式
	private String budget;//装修预算
	private Date created_time;//创建时间
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getSupply_id() {
		return supply_id;
	}
	public void setSupply_id(String supply_id) {
		this.supply_id = supply_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPlot_name() {
		return plot_name;
	}
	public void setPlot_name(String plot_name) {
		this.plot_name = plot_name;
	}
	public float getArea() {
		return area;
	}
	public void setArea(float area) {
		this.area = area;
	}
	public String getWay() {
		return way;
	}
	public void setWay(String way) {
		this.way = way;
	}
	public String getBudget() {
		return budget;
	}
	public void setBudget(String budget) {
		this.budget = budget;
	}
	public Date getCreated_time() {
		return created_time;
	}
	public void setCreated_time(Date created_time) {
		this.created_time = created_time;
	}
	
	
	
}
