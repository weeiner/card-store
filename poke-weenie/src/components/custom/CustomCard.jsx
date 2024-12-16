import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import logo from "../../assets/logo.jpeg";

function CustomCard() {
  return (
    <Card className="w-72 ml-3 mt-3 hover:scale-105 duration-200">
      <CardHeader>
        <CardTitle>
          <img src={logo} />
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default CustomCard;
