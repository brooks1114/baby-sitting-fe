import React, { Component } from "react";
import { Button, Dropdown, DropdownButton, FormControl, InputGroup } from "react-bootstrap";
import CloseIcon from "../closeIcon/CloseIcon";
import "./Filters.css";

class Filters extends Component {

    filters() {
        console.log("calling filters")
        this.props.filters(this.state);
    }
    nbs = ["Somerville", "Brighton", "Boston"]
    state = {
        firstName: "",
        lastName: "",
        availability: "",
        neighborhood: [],
        rating: "",
        hourlyRate: "",
        maxKids: ""
    }

    onClearFilter(stateToChange) {
        this.setState({ [stateToChange]: "" })
        this.filters(this.state)
    }

    render() {
        return (
            <div className="Filter">
                <div className="filter-container">
                    <DropdownButton id="dropdown-first-name" title="First Name">
                        <InputGroup>
                            <FormControl
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        this.setState({ firstName: event.target.value })
                                        this.filters(this.state)
                                    }
                                }}
                                onBlur={(event) => {
                                    this.setState({ firstName: event.target.value })
                                    this.filters(this.state)
                                }}
                            />
                            <Button> X </Button>
                        </InputGroup>
                    </DropdownButton>
                    <DropdownButton id="dropdown-last-name" title="Last Name">
                        <InputGroup>
                            <FormControl
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        this.setState({ lastName: event.target.value })
                                        this.filters(this.state)
                                    }
                                }}
                                onBlur={(event) => {
                                    this.setState({ lastName: event.target.value })
                                    this.filters(this.state)
                                }
                                }
                            />
                        </InputGroup>
                    </DropdownButton>
                    <DropdownButton id="dropdown-availability" title="Sitter Availabilty">
                        <InputGroup>
                            <FormControl type="date" />
                        </InputGroup>
                    </DropdownButton>
                    <DropdownButton id="dropdown-neighborhood" title="Neighborhood">
                        {<div>
                            {this.nbs.map((nb) => {
                                return (
                                    <div className="toppings-list-item">
                                        <div className="left-section">
                                            <input
                                                type="checkbox"
                                                id={`custom-checkbox-${nb}`}
                                                name={nb}
                                                value={nb}
                                                // checked={checkedState[index]}
                                                onChange={(event) => {
                                                    this.setState({ neighborhood: [...this.state.neighborhood, event.target.value] })
                                                    this.filters(this.state)
                                                }}
                                            />
                                            <label htmlFor={`custom-checkbox-${nb}`}>{nb}</label>
                                        </div>
                                        <div className="right-section">console.log(this.state.neighborhood)</div>
                                    </div>
                                );
                            })}
                        </div>}
                    </DropdownButton>
                    <DropdownButton id="dropdown-rating" title="Rating" onSelect={(eventKey, event) => {
                        this.setState({ rating: eventKey })
                        this.filters(this.state)
                    }}>
                        <Dropdown.Item eventKey="1">1+</Dropdown.Item>
                        <Dropdown.Item eventKey="2">2+</Dropdown.Item>
                        <Dropdown.Item eventKey="3">3+</Dropdown.Item>
                        <Dropdown.Item eventKey="4">4+</Dropdown.Item>
                        <Dropdown.Item eventKey="5">5</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-hourly-rate" title="Max. Hourly Rate">
                        <InputGroup>
                            <FormControl type="number"
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        this.setState({ hourlyRate: event.target.value })
                                        this.filters(this.state)
                                    }
                                }}
                                onBlur={(event) => {
                                    this.setState({ hourlyRate: event.target.value })
                                    this.filters(this.state)
                                }}
                            />
                        </InputGroup>
                    </DropdownButton>
                    <DropdownButton id="dropdown-max-kids" title="Max Kids...???">
                        <InputGroup>
                            <FormControl type="number"
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        this.setState({ maxKids: event.target.value })
                                        this.filters(this.state)
                                    }
                                }}
                                onBlur={(event) => {
                                    this.setState({ maxKids: event.target.value })
                                    this.filters(this.state)
                                }}
                            />
                        </InputGroup>
                    </DropdownButton>
                </div>
                <div className="active-filters-container">
                    {this.state.firstName !== "" ? <div className="filter-indicator"> First Name: {this.state.firstName} <CloseIcon handleClickClose={() => this.onClearFilter("firstName")} /> </div> : <></>}
                    {this.state.lastName !== "" ? <div className="filter-indicator"> Last Name: {this.state.lastName} <CloseIcon handleClickClose={() => this.onClearFilter("lastName")} /> </div> : <></>}
                    {this.state.availability !== "" ? <div className="filter-indicator"> Availabilty: {this.state.availability} <CloseIcon />  </div> : <></>}
                    {this.state.neighborhood.length > 0 ? <div className="filter-indicator"> Neighborhood: {this.state.neighborhood} <CloseIcon />  </div> : <></>}
                    {this.state.rating !== "" ? <div className="filter-indicator"> Rating: {this.state.rating} <CloseIcon />  </div> : <></>}
                    {this.state.hourlyRate !== "" ? <div className="filter-indicator"> Hourly Rate: {this.state.hourlyRate} <CloseIcon handleClickClose={() => this.onClearFilter("hourlyRate")} /> </div> : <></>}
                    {this.state.maxKids !== "" ? <div className="filter-indicator"> Max Kids: {this.state.maxKids} <CloseIcon handleClickClose={() => this.onClearFilter("maxKids")} /> </div> : <></>}
                </div>
            </div>
        );
    }
}

export default Filters;