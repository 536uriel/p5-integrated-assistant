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
