'use client'

import React from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@nextui-org/react";
import {Tabs, Tab, Input, Card, CardBody, CardHeader, CardFooter, Divider} from "@nextui-org/react";


export default function Home() {
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const [selected, setSelected] = React.useState("login");

  const current_year = new Date().getFullYear();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <Navbar disableAnimation
      isBordered 
    >

<NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>      

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      </Navbar>
    
      <Card >
        <CardBody >
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form >
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div >
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form >
                <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div >
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    
      <div id="section_footer">
        <div className='text-center py-4'>
          <Link href="#" target="_blank" className='btn btn-link'>
          Privacy
          </Link>
          <span>|</span>
          <Link href="#" target="_blank" className='btn btn-link'>
          Terms
          </Link>
          <span>|</span>
          <Link href="#" target="_blank" className='btn btn-link'>
          Contact
          </Link>
          <p>Copyright {current_year}, Webpage. All Rights Reserved.</p>
        </div>
      </div>
    
    </main>

  );
}
