import React, { Component } from 'react';
import {
	Button,
	Container,
	Row,
	Table,
	Col,
	Form,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

import Link from 'next/link'

import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		}
	}
	isOpen() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return (
			<div className="container">
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">TracklistJunkie</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="" navbar>
							<NavItem>
								<NavLink href="/home">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/about">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/explore">Explore</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/login">Login</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/register">Register</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
		                </DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Option 1
		                  </DropdownItem>
									<DropdownItem>
										Option 2
		                  </DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										Reset
		                  </DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
				<div className="container">
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
}
export default Layout