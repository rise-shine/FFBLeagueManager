import React from "react";
import schedule from "../schedule.json";
import '../Layouts/Schedule.css';

export default class Schedule extends React.Component {

    state = {
        schedule
    }
    render() {

        console.log(this.state.schedule)

        return (

           <div>
                {this.state.schedule.map(game => {

                    return (
                        <div id="scheduleDiv">
                            <span class="scheduleTextBold">Week 1: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week1.game1[0]} vs. {game.week1.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week1.game2[0]} vs. {game.week1.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week1.game3[0]} vs. {game.week1.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week1.game4[0]} vs. {game.week1.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week1.game5[0]} vs. {game.week1.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week1.game6[0]} vs. {game.week1.game6[1]}</span></li>
                            </ul>

                            <span class="scheduleTextBold">Week 2: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week2.game1[0]} vs. {game.week2.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week2.game2[0]} vs. {game.week2.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week2.game3[0]} vs. {game.week2.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week2.game4[0]} vs. {game.week2.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week2.game5[0]} vs. {game.week2.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week2.game6[0]} vs. {game.week2.game6[1]}</span></li>
                            </ul>
                        
                            <span class="scheduleTextBold">Week 3: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week3.game1[0]} vs. {game.week3.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week3.game2[0]} vs. {game.week3.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week3.game3[0]} vs. {game.week3.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week3.game4[0]} vs. {game.week3.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week3.game5[0]} vs. {game.week3.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week3.game6[0]} vs. {game.week3.game6[1]}</span></li>
                            </ul>

                            <span class="scheduleTextBold">Week 4: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week4.game1[0]} vs. {game.week4.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week4.game2[0]} vs. {game.week4.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week4.game3[0]} vs. {game.week4.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week4.game4[0]} vs. {game.week4.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week4.game5[0]} vs. {game.week4.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week4.game6[0]} vs. {game.week4.game6[1]}</span></li>
                            </ul>

                            <span class="scheduleTextBold">Week 5: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week5.game1[0]} vs. {game.week5.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week5.game2[0]} vs. {game.week5.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week5.game3[0]} vs. {game.week5.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week5.game4[0]} vs. {game.week5.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week5.game5[0]} vs. {game.week5.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week5.game6[0]} vs. {game.week5.game6[1]}</span></li>
                            </ul>

                            <span class="scheduleTextBold">Week 6: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week6.game1[0]} vs. {game.week6.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week6.game2[0]} vs. {game.week6.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week6.game3[0]} vs. {game.week6.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week6.game4[0]} vs. {game.week6.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week6.game5[0]} vs. {game.week6.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week6.game6[0]} vs. {game.week6.game6[1]}</span></li>
                            </ul>

                            <span class="scheduleTextBold">Week 7: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week7.game1[0]} vs. {game.week7.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week7.game2[0]} vs. {game.week7.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week7.game3[0]} vs. {game.week7.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week7.game4[0]} vs. {game.week7.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week7.game5[0]} vs. {game.week7.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week7.game6[0]} vs. {game.week7.game6[1]}</span></li>
                            </ul>

                            <span class="scheduleTextBold">Week 8: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week8.game1[0]} vs. {game.week8.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week8.game2[0]} vs. {game.week8.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week8.game3[0]} vs. {game.week8.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week8.game4[0]} vs. {game.week8.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week8.game5[0]} vs. {game.week8.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week8.game6[0]} vs. {game.week8.game6[1]}</span></li>
                            </ul>

                            <span class="scheduleTextBold">Week 9: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week9.game1[0]} vs. {game.week9.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week9.game2[0]} vs. {game.week9.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week9.game3[0]} vs. {game.week9.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week9.game4[0]} vs. {game.week9.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week9.game5[0]} vs. {game.week9.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week9.game6[0]} vs. {game.week9.game6[1]}</span></li>
                            </ul>                            

                            <span class="scheduleTextBold">Week 10: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week10.game1[0]} vs. {game.week10.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week10.game2[0]} vs. {game.week10.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week10.game3[0]} vs. {game.week10.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week10.game4[0]} vs. {game.week10.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week10.game5[0]} vs. {game.week10.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week10.game6[0]} vs. {game.week10.game6[1]}</span></li>
                            </ul>

                            <span class="scheduleTextBold">Week 11: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week11.game1[0]} vs. {game.week11.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week11.game2[0]} vs. {game.week11.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week11.game3[0]} vs. {game.week11.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week11.game4[0]} vs. {game.week11.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week11.game5[0]} vs. {game.week11.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week11.game6[0]} vs. {game.week11.game6[1]}</span></li>
                            </ul>                            

                            <span class="scheduleTextBold">Week 12: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week12.game1[0]} vs. {game.week12.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week12.game2[0]} vs. {game.week12.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week12.game3[0]} vs. {game.week12.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week12.game4[0]} vs. {game.week12.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week12.game5[0]} vs. {game.week12.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week12.game6[0]} vs. {game.week12.game6[1]}</span></li>
                            </ul>

                            <span class="scheduleTextBold">Week 13: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week13.game1[0]} vs. {game.week13.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week13.game2[0]} vs. {game.week13.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week13.game3[0]} vs. {game.week13.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week13.game4[0]} vs. {game.week13.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week13.game5[0]} vs. {game.week13.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week13.game6[0]} vs. {game.week13.game6[1]}</span></li>
                            </ul>

                            <span class="scheduleTextBold">Week 14: </span>
                            <ul>
                                <li><span class="scheduleText">{game.week14.game1[0]} vs. {game.week14.game1[1]}</span></li>
                                <li><span class="scheduleText">{game.week14.game2[0]} vs. {game.week14.game2[1]}</span></li>
                                <li><span class="scheduleText">{game.week14.game3[0]} vs. {game.week14.game3[1]}</span></li>
                                <li><span class="scheduleText">{game.week14.game4[0]} vs. {game.week14.game4[1]}</span></li>
                                <li><span class="scheduleText">{game.week14.game5[0]} vs. {game.week14.game5[1]}</span></li>
                                <li><span class="scheduleText">{game.week14.game6[0]} vs. {game.week14.game6[1]}</span></li>
                            </ul>

                        </div>
                    )
                    
                })}
           </div>

        )
    }
}