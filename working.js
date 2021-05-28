let enter=prompt("what you wanna do? :");

const todo=[];

while(enter!='quit'&& enter!='q')
{
    if(enter=='list')
    {
        
        for(var i=0;i<todo.length;i++)
        {
            console.log(`${i}: ${todo[i]}`)
        }
    }
    else if(enter=='new')
    {
        const lol=prompt("enter your todo item! ");
        todo.push(lol);
        console.log(`${lol} added to our list. `);
    }
    else if(enter=='delete')
    {
        const del=prompt('enter the index item you want to delete');
        for( var i=0;i<todo.length;i++)
        {
            if(i==del)
            {
                todo.splice(i,1);
                console.log("item deleted");
                
            }
            
        }
    }
    enter=prompt("what you wnna do? :");




}
console.log(" application is closed ");
