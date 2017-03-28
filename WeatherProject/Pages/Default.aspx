<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>
<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
	<link href="../Content/bootstrap.min.css" rel="stylesheet" />
	<script src="../Scripts/moment-with-locales.min.js"></script>
	<script type="text/javascript" src="../Scripts/jquery-3.1.1.min.js"></script>
	<script src="../Scripts/bootstrap.min.js"></script>

	<script src="../Scripts/Chart.min.js"></script>

	<script src="../Scripts/skycons.js"></script>

	<!-- Add your CSS styles to the following file -->
	<link href="../Content/FullApp.css" rel="stylesheet" />
	<link href="../Content/style.css" rel="stylesheet" />

	<!-- Add your JavaScript to the following file -->
	<script src="../Scripts/FullPageScript.js"></script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">

</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

<div class="container-fluid">
   <div class="jumbotron jumbo body_image">
	  <div class="row">

	<!-- Första diven -->
		 <div class="col-sm-6 col-md-6 col-lg-6 forstaDiv" style="background-color:yellow;padding-top:20px">
			
				  <div class="list-group col-sm-12 col-md-12 col-lg-12 text-center">

							  <span class="glyphicon glyphicon-map-marker" id="tidzon" style="font-size:1.5em;word-spacing: -10px"></span>
							  
				  </div>
							  
				  <div class="container col-sm-12 col-md-12 col-lg-12">
					  <div class="row row-centered">

						  <div class="col-centered col-md-6">
							<div class="item">
								<div class="content">
									<div class="pull-right" id="currentTemp" style="font-size:4em"></div>
								</div>
							</div>
						  </div>
						  <div class="col-centered col-md-6">
							 <div class="item">
								<div class="content">
									<canvas class="pull-right center-block" id="icon"></canvas>
								</div>
						   </div>
						 </div>

					 </div>
				  </div>    
                    
						  <span class="col-md-offset-6 text-center" id="summaryToday"></span> 
						  <span class="col-md-6 pull-left" id="RealFeel"></span>
                  

								  <table>
													<tr>
														<th>Days</th>
														<th>Humidity</th>
														<th>Wind</th>
														<th>Sunrise</th>
														<th>Sunset</th>
													</tr>
													<tr>
														<td id="dayTable1"></td>
														<td id="humidTable1"></td>
														<td>Germany</td>
														<td>Maria Anders</td>
														<td>Germany</td>
													</tr>
													<tr>
														<td id="dayTable2"></td>
														<td id="humidTable2"></td>
														<td>Mexico</td>
														<td>Maria Anders</td>
														<td>Germany</td>
													</tr>
													<tr>
														<td id="dayTable3"></td>
														<td id="humidTable3"></td>
														<td>Austria</td>
														<td>Maria Anders</td>
														<td>Germany</td>
													</tr>
													<tr>
														<td id="dayTable4"></td>
														<td id="humidTable4"></td>
														<td>UK</td>
														<td>Maria Anders</td>
														<td>Germany</td>
													</tr>
													<tr>
														<td id="dayTable5"></td>
														<td id="humidTable5"></td>
														<td>Canada</td>
														<td>Maria Anders</td>
														<td>Germany</td>
													</tr>
													<tr>
														<td id="dayTable6"></td>
														<td id="humidTable6"></td>
														<td>Italy</td>
														<td>Maria Anders</td>
														<td>Germany</td>
													</tr>
													<tr>
														<td id="dayTable7"></td>
														<td id="humidTable7"></td>
														<td>Canada</td>
														<td>Maria Anders</td>
														<td>Germany</td>
													</tr>
													<tr>
														<td id="dayTable8"></td>
														<td id="humidTable8"></td>
														<td>Italy</td>
														<td>Maria Anders</td>
														<td>Germany</td>
													</tr>
								  </table>

	  </div>
	  
	   <div class="col-sm-6 col-md-6 col-lg-6 text-center">
						<div class="list-group-item" id="dagensVeckoDag" style="font-size:2.0em"></div>
	  </div> 
	  <div class="col-sm-6 col-md-6 col-lg-6 andraDiv" style="background-color:pink;padding-top:20px">
		 
				<div id="chartDiv">

					 <div class="">

						  <h2>Väder Rapport</h2>
						  <h4>Chart line - sträcker sig i dagar jämfört med temperatur</h4>
					<div>
									 <canvas id="myChart3"></canvas>
			   </div>
						 
					 </div>
			   </div>
	   
	 </div>
	 <div class="col-sm-6 col-md-6 col-lg-6 fjardeDiv" style="background-color:Highlight;padding-top:20px">
		 
			   <div class="col-sm-4 col-md-4 col-lg-4 list-group otherDiv">

					<div class="list-group-item text-center" style="">
						   <span class="" id="current_time"></span><br />
						   <span class="" id="current_date" ></span>
					</div>

			  </div>
   

			   <div class="col-sm-4 col-md-4 col-lg-4 list-group">
			  
						  <span class="list-group-item text-center" id="humidity"></span>
              </div>

              <div class="col-sm-4 col-md-4 col-lg-4 list-group">

						  <span class="list-group-item text-center" id="windSpeed"></span>
               </div>

         	<div class="col-sm-12 col-md-12 col-lg-12 list-group">
			        <div class="list-group-item text-center">
						  <span class="" id="location"></span><br />
						  <span class="" id="summary_hourly"></span>
				</div>
			   
			   </div>
	   
	 </div>

	<div class="col-sm-12 col-md-12 col-lg-12 text-center tredjeDiv">
       
		  <div class="row">
		        

												<div class="list-group-item col-md-1 back_image">
													<span id="dagDate1"></span>
													<canvas class="" id="day1" width="62" height="62"></canvas>
													<span id="Temp1"></span>
												</div>

												<div class="list-group-item col-md-1 back_image">
													<span id="dagDate2"></span>
													<canvas class="" id="day2" width="62" height="62"></canvas>
													<span id="Temp2"></span>
												</div>

												<div class="list-group-item col-md-1 back_image">
													<span class="" id="dagDate3"></span>
													<canvas class="" id="day3" width="62" height="62"></canvas>
													<span id="Temp3"></span>
												</div>

												<div class="list-group-item col-md-1 back_image">
													<span id="dagDate4"></span>
													<canvas class="" id="day4" width="62" height="62"></canvas>
													<span id="Temp4"></span>
												</div>

												<div class="list-group-item col-md-1 back_image">
													<span id="dagDate5"></span>
													<canvas class="" id="day5" width="62" height="62"></canvas>
													<span id="Temp5"></span>
												</div>

												<div class="list-group-item col-md-1 back_image">
													<span id="dagDate6"></span>
													<canvas class="" id="day6" width="62" height="62"></canvas>
													<span id="Temp6"></span>
												</div>

												<div class="list-group-item col-md-1 back_image">
													<span id="dagDate7"></span>
													<canvas class="" id="day7" width="62" height="62"></canvas>
													<span id="Temp7"></span>
												</div>

												<div class="list-group-item col-md-1 back_image">
													<span id="dagDate8"></span>
													<canvas class="" id="day8" width="62" height="62"></canvas>
													<span id="Temp8"></span>
												</div>
				 
							
            <div class="col-sm-4 col-md-4 col-lg-4 sunLoc">

					
                  <div class="list-group-item text-center" style="word-spacing: 40px">
							
                      <span class="" id="rise"></span>
					
                      <span class="" id="down" ></span>
				  </div>

				<div class="list-group-item text-center">
				      <span id="test"></span>
				</div>

			 </div>
			</div>
	  </div>

</div>
</div>
</div>

</asp:Content>
