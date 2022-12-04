+<%- include ../partials/header.ejs %>
  <%- include ../partials/main_nav.ejs %>
    <!--List.ejs-->
    <!--localhost:3000/bracket-list/show/_id:-->
    <!-- Main Content -->
    <!--Changes made:
Tournament layout to set up the teams
display missing some spacing
delete button does not refresh properly-->
    <div id="displayPage">
      <main class="container">
        <form class="form" method="post">
          <div class="row">

            <h1>
              <%=title %>
            </h1>
            <div class="col-md-offset-3 col-md-8">

              <br />
              <table class="table table-bordered table-striped" style="background-color:#FFFFFF;">
                <!--HEader row-->
                <tr>
                  <th class="text-center">Tournament Info</th>
                  <th class="text-center">Game Info</th>
                  <th class="text-center">Number of Teams</th>
                  <th class="text-center">Description</th>
                </tr>
                <tr>
                  <td class="text-centre ">
                    <%=bracket.tournamentName %>
                  </td>
                  <td class="text-centre ">
                    <%=bracket.gameType %>
                  </td>
                  <td class="text-centre ">
                    <%=bracket.players %>
                  </td>
                  <td class="text-centre ">
                    <%=bracket.description %>
                  </td>
                </tr>
              </table>
              <br>
              <H4>Round 1</H1>
            </div>
          </div>

          <div class="row">
            <!--3 tables are made (in order), 
            1/2 team names | game table display | other 1/2 team names-->

            <table style="width: 120px;">
              <!--uses bracket.players instead of number of entries to fix but when changing number of teams in edit page-->
              <% if (bracket.players==8){ %>
                <tr class="table-noborder bg-dark">
                  <td class="text-center bg-danger">
                    <%= bracket.teams[0] %> 
                  </td>
                </tr>
                <tr class="table-noborder bg-dark">
                  <td class="text-center bg-black ">
                    <%= bracket.teams[1] %> 
                  </td>
                </tr>
                <tr class="table-noborder bg-white" style="line-height: 12px;">
                  <td>&ensp;</td>
                </tr>
                <tr class="table-noborder bg-dark"></tr>
                <td class="text-center bg-danger  ">
                  <%= bracket.teams[2] %> 
                </td>
                </tr>
                <tr class="table-noborder bg-dark"></tr>
                <td class="text-center bg-dark ">
                  <%= bracket.teams[3] %>
                </td>
                </tr>
                <% } else { %>
                  <tr class="table-noborder bg-dark">
                    <td class="text-center bg-danger ">
                      <%= bracket.teams[0] %> 
                    </td>
                  </tr>
                  <tr class="table-noborder bg-dark">
                    <td class="text-center bg-dark ">
                      <%= bracket.teams[1] %>
                    </td>
                  </tr>
                  <tr class="table-noborder bg-white" style="line-height: 12px;">
                    <td>&ensp;</td>
                  </tr>
                  <tr class="table-noborder bg-dark"></tr>
                  <td class="text-center bg-danger ">
                    <%= bracket.teams[2] %> 
                  </td>
                  </tr>
                  <tr class="table-noborder bg-dark">
                    <td class="text-center bg-dark ">
                      <%= bracket.teams[3] %> 
                    </td>
                  </tr>
                  <tr class="table-noborder bg-white" style="line-height: 12px;">
                    <td>&ensp;</td>
                  </tr>
                  <tr class="table-noborder bg-dark">
                    <td class="text-center bg-danger ">
                      <%= bracket.teams[4] %> 
                    </td>
                  </tr>
                  <tr class="table-noborder bg-dark">
                    <td class="text-center bg-dark ">
                      <%= bracket.teams[5] %> 
                    </td>
                  </tr>
                  <tr class="table-noborder bg-white" style="line-height: 12px;">
                    <td>&ensp;</td>
                  </tr>
                  <tr class="table-noborder bg-dark">
                    <td class="text-center bg-danger ">
                      <%= bracket.teams[6] %> 
                    </td>
                  </tr>
                  <tr class="table-noborder bg-dark">
                    <td class="text-center bg-dark ">
                      <%= bracket.teams[7] %> 
                    </td>
                  </tr>
                  <% } %>

            </table>

            &nbsp;

            <% if (bracket.players==8){ %>
              <!--displays the middle table for 8 teams-->
              <table style="width: 100px;">
                <tr>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td id="win1" class="bg-danger">game 1</td>
                </tr>
                <tr>
                  <td id="win2" class="bg-dark">game 1</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                </tr>
              </table>
              &nbsp;

              <table style="width: 100px;">
                <tr class="text-center ">
                  <td>&nbsp;</td>
                </tr>
                <tr>

                  <td id="round21" class="text-center bg-dark">game 2</td>
                </tr>
                <tr class="text-center ">
                  <td>&nbsp;</td>
                </tr>
              </table>
              &nbsp;

              <table style="width: 150px;">
                <tr>
                  <td id="final81" class="text-center bg-success" style="width:140px; font-size: 30px;">&ensp; final
                    &ensp;</td>
                </tr>
              </table>
              &nbsp;

              <table style="width: 100px;">
                <tr class="text-center">
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td id="round22" class="text-center bg-dark">game 2</td>

                </tr>
                <tr class="text-center">
                  <td>&nbsp;</td>
                </tr>
              </table>

              &nbsp;


              <table style="width: 100px;">
                <tr>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td id="win3" class="bg-danger">game 1</td>
                </tr>
                <tr>
                  <td id="win4" class="bg-dark">game 1</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                </tr>
              </table>
              &nbsp;

              <% } else { %>
                <!--displays middle table for 16 teams-->
                <table style="width: 100px;">
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td id="win1" class="bg-danger">game 1</td>
                  </tr>
                  <tr>
                    <td id="win2" class="bg-dark">game 1</td>
                  </tr>
                  <tr class="table-noborder " style="line-height: 60px;">
                    <td>&ensp;</td>
                  </tr>
                  <tr>
                    <td id="win3" class="bg-danger">game 1</td>
                  </tr>
                  <tr>
                    <td id="win4" class="bg-dark">game 1</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </table>
                &nbsp;

                <table style="width: 100px;">
                  <tr class="text-center">
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td id="round21" class="text-center bg-danger">game 2</td>
                  </tr>
                  <tr>
                    <td id="round22" class="text-center bg-dark">game 2</td>
                  </tr>
                  <tr class="text-center">
                    <td>&nbsp;</td>
                  </tr>
                </table>
                &nbsp;

                <table style="width: 100px;">
                  <tr class="text-center">
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td id="final81" class="text-center bg-dark">game 3</td>
                  </tr>

                  <tr class="text-center">
                    <td>&nbsp;</td>
                  </tr>
                </table>
                &nbsp;

                <table style="width: 150px;">
                  <tr class="text-center">
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td id="final16" class="text-center bg-success" style="width:120px; font-size:30px">&ensp; final
                      &ensp;</td>
                  </tr>
                  <tr class="text-center">
                    <td>&nbsp;</td>
                  </tr>
                </table>
                &nbsp;

                <table style="width: 100px;">
                  <tr class="text-center">
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td id="final82" class="text-center bg-dark">game 3</td>
                  </tr>
                  <tr class="text-center">
                    <td>&nbsp;</td>
                  </tr>
                </table>

                &nbsp;


                <table style="width: 100px;">
                  <tr class="text-center ">
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td id="round23" class="text-center bg-danger">game 2</td>
                  </tr>
                  <tr>
                    <td id="round24" class="text-center bg-dark">game 2</td>
                  </tr>
                  <tr class="text-center">
                    <td>&nbsp;</td>
                  </tr>
                </table>
                &nbsp;


                <table style="width: 100px;">
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td id="win5" class="bg-danger">game 1</td>
                  </tr>
                  <tr>
                    <td id="win6" class="bg-dark">game 1</td>
                  </tr>
                  <tr class="table-noborder " style="line-height: 60px;">
                    <td>&ensp;</td>
                  </tr>
                  <tr>
                    <td id="win7" class="bg-danger">game 1</td>
                  </tr>
                  <tr>
                    <td id="win8" class="bg-dark">game 1</td>
                  </tr>
                  <tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </table>
                &nbsp;

                <% } %>

                  <table style="text-align:right; width: 120px">
                    <% if (bracket.players==8){ %>
                      <tr class="table-noborder bg-dark">
                        <td class="text-center bg-danger ">
                          <%= bracket.teams[4] %> 
                        </td>
                      </tr>
                      <tr class="table-noborder bg-dark">
                        <td class="text-center bg-dark ">
                          <%= bracket.teams[5] %> 
                        </td>
                      </tr>
                      <tr class="table-noborder bg-white" style="line-height: 12px;">
                        <td>&ensp;</td>
                      </tr>
                      <tr class="table-noborder bg-dark"></tr>
                      <td class="text-center bg-danger ">
                        <%= bracket.teams[6] %> 
                      </td>
                      </tr>
                      <tr class="table-noborder bg-dark"></tr>
                      <td class="text-center bg-dark">
                        <%= bracket.teams[7] %> 
                      </td>
                      </tr>
                      <% } else { %>
                        <tr class="table-noborder bg-dark">
                          <td class="text-center bg-danger ">
                            <%= bracket.teams[8] %> 
                          </td>
                        </tr>
                        <tr class="table-noborder bg-dark">
                          <td class="text-center bg-dark ">
                            <%= bracket.teams[9] %> 
                          </td>
                        </tr>
                        <tr class="table-noborder bg-white" style="line-height: 12px;">
                          <td>&ensp;</td>
                        </tr>
                        <tr class="table-noborder bg-dark">
                          <td class="text-center bg-danger ">
                            <%= bracket.teams[10] %> 
                          </td>
                        </tr>
                        <tr class="table-noborder bg-dark">
                          <td class="text-center bg-dark ">
                            <%= bracket.teams[11] %> 
                          </td>
                        </tr>
                        <tr class="table-noborder bg-white" style="line-height: 12px;">
                          <td>&ensp;</td>
                        </tr>
                        <tr class="table-noborder bg-dark">
                          <td class="text-center bg-danger ">
                            <%= bracket.teams[12] %> 
                          </td>
                        </tr>
                        <tr class="table-noborder bg-dark">
                          <td class="text-center bg-dark ">
                            <%= bracket.teams[13] %> 
                          </td>
                        </tr>
                        <tr class="table-noborder bg-white" style="line-height: 12px;">
                          <td>&ensp;</td>
                        </tr>
                        <tr class="table-noborder bg-dark">
                          <td class="text-center bg-danger ">
                            <%= bracket.teams[14] %> 
                          </td>
                        </tr>
                        <tr class="table-noborder bg-dark">
                          <td class="text-center bg-dark ">
                            <%= bracket.teams[15] %> 
                          </td>
                        </tr>
                        <% } %>
                  </table>

          </div>
          <!--row close-->

          <%{%>
            <!--<div style="height: 40px;">-->
           

            <%}%>
        </form>
      </main>
    </div>
    

    <%- include ../partials/bottom_nav.ejs %>
      <%- include ../partials/footer.ejs %>