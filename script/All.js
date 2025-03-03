
const completedButtons = document.querySelectorAll('.btn-completed');
const taskCountElement = document.getElementById('taskA');
const navbarCountElement = document.getElementById('count');
const activityLogContainer = document.getElementById('activityLogContainer');
const clearHistoryButton = document.querySelector('.btn-primary');


completedButtons.forEach(button => {
    button.addEventListener('click', function () {

        const taskName = button.parentElement.parentElement.querySelector('h2').textContent;
        const confirmCompletion = confirm('Board updated Successfully');





        if (confirmCompletion) {

            button.disabled = true;



            let taskCount = parseInt(taskCountElement.textContent);
            taskCountElement.textContent = taskCount - 1;


            let navbarCount = parseInt(navbarCountElement.textContent.trim());
            navbarCountElement.textContent = ` ${navbarCount + 1} `;


            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const logEntry = document.createElement('p');
            logEntry.textContent = `You have completed the task "${taskName}" at ${timeString}`;

            logEntry.style.backgroundColor = "#F4F7FF";
            logEntry.style.padding = "10px";
            logEntry.style.borderRadius = "8px";
            logEntry.style.margin = "0 10px";
            logEntry.style.fontSize = "16px";
            logEntry.style.marginBottom = "28px";


            activityLogContainer.appendChild(logEntry);


            // last challenge part
            const remainingTasks = document.querySelectorAll('.btn-completed:not([disabled])');
            if (remainingTasks.length === 0) {
                setTimeout(() => {
                    alert("🎉 Congratulations! You have completed all the current tasks! ");
                }, 100);
            }
        }
    });
});


// activity log
const clearHistoryBtn = document.getElementById('clear-history-btn');

clearHistoryBtn.addEventListener('click', (event) => {
    const activityLogContainer= document.getElementById ('activityLogcontainer')
    
    activityLogContainer.innerHTML = '';
});
