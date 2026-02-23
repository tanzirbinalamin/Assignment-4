let interviewList=[];
let rejectedList=[];

let total= document.getElementById('total');
let interviewCount= document.getElementById('interview');
let rejectedCount= document.getElementById('rejected');

const allTab=document.getElementById("all-filter-btn");
const interviewTab=document.getElementById("interview-filter-btn");
const rejectedTab=document.getElementById("rejected-filter-btn");

const mainContainer=document.querySelector('main');

const allCard=document.getElementById('Allcards');
const filtered=document.getElementById('filtered');

function calculateCount(){
    total.innerText= allCard.children.length
    interviewCount.innerText= interviewList.length
     rejectedCount.innerText= rejectedList.length

}

calculateCount()

function toggleStyle(id){

     allTab.classList.add('bg-gray-100')
    interviewTab.classList.add('bg-gray-100')
    rejectedTab.classList.add('bg-gray-100')


     allTab.classList.remove('bg-sky-100')
    interviewTab.classList.remove('bg-sky-100')
    rejectedTab.classList.remove('bg-sky-100')

    const selected=document.getElementById(id);

    selected.classList.remove('bg-gray-100')
    selected.classList.add('bg-sky-100')
 
}

mainContainer.addEventListener('click', function(event){


    if(event.target.classList.contains('interview-btn')){

             const parentNode= event.target.parentNode.parentNode;

    const jobName= parentNode.querySelector('.job-name').innerText
    const Position= parentNode.querySelector('.position').innerText
    const Salary= parentNode.querySelector('.salary').innerText
    const Status= parentNode.querySelector('.Status').innerText
    const Summery= parentNode.querySelector('.summery').innerText

   const cardInfo={
    jobName,
    Position,
    Salary,
    Status,
    Summery
   }

   const jobExist= interviewList.find(item=> item.jobName == cardInfo.jobName);
   parentNode.querySelector('.Status').innerText = 'Applied'
   if(!jobExist){
    interviewList.push(cardInfo)
   }

   renderInterview()
    }

   
})

function renderInterview() {
    filtered.innerHTML= ' '

    for( let interview of interviewList){
        console.log(interview);

        let div= document.createElement('div');
        div.className='flex justify-between mt-6 bg-white p-4'
        div.innerHTML=`
             <div >
                        <h3 class="job-name font-bold">Grameenphone</h3>      
                        <p class="position">Executive, IT Engineer, Marketing Officer</p>
                        
                        <br>
                        
                        <p class="salary">Full-time • TK30,000 - TK75,000</p>
                        
                        <br>
                        <p class="Status text-center w-[120px] p-3 bg-sky-100">Not Applied</p>
                        
                        <p class="summery">Grameenphone is a leading telecom company in Bangladesh offering private-sector jobs in IT, marketing, network engineering, and corporate roles.</p>
                        <br>
                        <div class="flex gap-2">
                            <button id="interview" class="btn interview-btn">Interview</button>
                            <button id="rejected" class="btn rejected-btn">Rejected</button>
                            
                        </div>
                    </div>
                    
                    
                    
                    
                    
                <button class="btn"><img src="./assets/delete.png"></button>

        `

        filtered.appendChild(div)
    }
}



