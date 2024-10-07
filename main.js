//Grading System for Diploma in Engineering

  document.write("<h6> Grading System for Diploma in Engineering </h6>")
var mark = parseFloat(prompt("Enter the mark: "));

if(mark >= 80 && mark <= 100)
{
    document.write("CGPA: A+")
}
else if( mark >= 75 && mark <= 79)
{
    document.write("CGPA: A")
}
else if( mark >= 70 && mark <= 74)
{
    document.write("CGPA: A-")
}
else if( mark >= 65 && mark <= 69)
{
    document.write("CGPA: B+")
}
else if( mark >= 60 && mark <= 64)
{
    document.write("CGPA: B")
}
else if( mark >= 55 && mark <= 59)
{
    document.write("CGPA: B-")
}
else if( mark >= 50 && mark <= 54)
{
    document.write("CGPA: C+")
}
else if( mark >= 45 && mark <= 49)
{
    document.write("CGPA: C")
}
else if( mark >= 40 && mark <= 44)
{
    document.write("CGPA: D")
}
else if(mark>=0 && mark <=39)
{
    document.write("Result: F")
}
else{
    document.write("Undifine mark")
}
