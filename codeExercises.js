function addExercise1() {
    editor1.setValue(`
        r = 0
        g = 0
        b = 0

        x = 100
        y = 100
        radius = 100
        speedx = 5
        speedy = 5

        `)

    editor2.setValue(`

        //הכנס כאן את משתני הצבעים לפקודה 
        //ושנה את הצבעים של הכדור עם שינוי המספרים
        fill("purple")
        circle(x, y, radius)

        x += speedx
        y += speedy

        if(x > width || x < 0){
            speedx = -speedx
        }

        if(y > height || y < 0){
            speedy = -speedy
        }

        `)
}






function addExercise2() {
    editor1.setValue(`
//קבע כיוון התנועה של המעגל
d = degrees_to_direction(-90)
//קבע את המיקום ההתחלתי של המעגל
c = createVector(200, 200)
//קבע מהירות התנועה של המעגל
d.mult(5)

        `)

    editor2.setValue(`
//הסבר על הפקודות - כאן לא נשנה כלום

//כאן אנו מוסיפים את הכיוון והתנועה בפועל לעיגול
c.add(d)
//כאן אנו קובעים את העיגול לפי המשתנים שיצרנו
circle(c.x, c.y, 50)
        `)
}


function addExercise3() {
    editor1.setValue(`
//כאן נקבע את ערכי המעגל ותנועתו
c = createCircle(x=200, y=200,r=50, color='blue', direction=-90, speed=5)
        `)

    editor2.setValue(`
//אם נוגע במסגרת - אז שנה כיוון
if (c.y < 0 || c.y > height){
c.direction = -c.direction

}

if (c.x < 0 || c.x > width){
c.speed = -c.speed

}
//צייר את העיגול
c.draw()
        `)
}