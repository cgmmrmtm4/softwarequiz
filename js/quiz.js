let chapterOneFlashCards = [
    {"chapter":1,"term":"Defect/Bug/Fault","definition":"A flow in a component or system that can cause the component or system to fail to perform its required function."},
    {"chapter":1,"term":"Error/Mistake","definition":"A human action that produces an incorrect result."},
    {"chapter":1,"term":"Failure","definition":"Deviation of the component or system from its expected delivery, service or result."},
    {"chapter":1,"term":"Quality","definition":"The degree to which a component, system or process meets specified requirements and/or user/customer needs and expectations."},
    {"chapter":1,"term":"Risk","definition":"A factor that could result in future negative consequences; usually expressed as impact and likelihood."},
    {"chapter":1,"term":"Debugging","definition":"The process of finding, analyzing and removing the causes of failures in software."},
    {"chapter":1,"term":"Requirement", "definition":"A condition or capability needed by a user to solve a problem or achieve an objective that must be met or possessed by a system or system component to satisfy a contract, standard, specification, or other formally imposed document."},
    {"chapter":1,"term":"Review","definition":"A evaluation of a product or project status to ascertain discrepancies from planned results and to recommend improvements. Examples include formal, informal, technical, inspection, and walkthrough."},
    {"chatper":1,"term":"Test Case","definition":"A set of input values, execution preconditions, expected results and execution postconditions, developed for a particular objective or test condition, such as to exercise a particular program path or to verify compliance with a spcific requirement."},
    {"chatper":1,"term":"Testing","definition":"The process consisting of all lifecycle activities, both static and dynamic, concerned with planning, preperation and evalutation of software products and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects."},
    {"chapter":1,"term":"Test Objective", "definition":"A reason or purpose for designing and executing a test"},
    {"chatper":1,"term":"Exhaustive Testing","definition":"A test approach in which the test suite comprises all combinations of input values and preconditions."},
    {"chapter":1,"term":"Confirmation Testing/Re-testing","definition":"Testing that runs test cases that failed the last time they were run, in order to verify the success of corrective actions."},
    {"chapter":1,"term":"Exit Criteria","definition":"The set of generic and specific conditions, agreed upon with the stakeholders for permitting a process to be officially completed. The purpose is to prevent a task from being considered completed when there are still outstanding parts of the task which have not been finished. Used to report against and to plan when to stop testing."},
    {"chapter":1,"term":"Incident","definition":"Any event occurring that requires investigation."},
    {"chapter":1,"term":"Regressiong Testing","definition":"Testing of a previously tested program following modification to ensure that defects have not been introduced or uncovered in unchanged areas of the software, as a result of the change made. It is performed when the software or its environment is changed."},
    {"chapter":1,"term":"Test Basis","definition":"All documents from which the requirements or a component or system can be inferred. The documentation on which the test cases are based."},
    {"chapter":1,"term":"Test Condition","definition":"An item or event of a component or system that could be verified by one or more test cases, e.g. a function, transaction, feature, quality attribute, or structural element."},
    {"chatper":1,"term":"Test Coverage/Coverage","definition":"The degree, expressed as a percentage, to which a specified item has been exercised by a test suite."},
    {"chapter":1,"term":"Test Data","definition":"Data that exists (for example, in a database) before a test is executed, and that affects or is affected by the component or system under test."},
    {"chapter":1,"term":"Test Execution","definition":"The process of running a test on the component or system under test, producing actual results."},
    {"chapter":1,"term":"Test Log","definition":"A chronological record of relevent details about the execution of tests."},
    {"chatper":1,"term":"Test Plan","definition":"A document describing the scope, approach, resources and schedule of intended test activities. It identifies amongst others test items, the features to be tested, the testing tasks, who whill do each task, degress of tester independence, the test environenment, the test design techniques and entry and exit criteria to be used, and the ratinale for their choice, and any risk requiring contingeny planning."},
    {"chapter":1,"term":"Test Procedure/Test Procedure Specification","definition":"A document specifying a sequence of actions for the execution of a test. Also known as test script or manual test script."},
    {"chapter":1,"term":"Test Policy","definition":"A high level document describing the principles, approach and major objectives of the organization regarding testing."},
    {"chapter":1,"term":"Test Suite","definition":"A set of several test cases for a component or system under test, where the post condition of one test is often used as the precondition for the next one."},
    {"chapter":1,"term":"Test Summary Report","definition":"A document summarizing testing activities and results. It also contains an evaluation of the corresponding test items against exit criteria."},
    {"chapter":1,"term":"Testware","definition":"Artifacts produced during the test process required to plan, design, and execute tests, such as documentation, scripts, inputs, expected results, set-up and clean-up procedures, files, databases, environment, and any additional software or utilities used in testing."},
    {"chapter":1,"term":"Error Guessing","definition":"A tet design technique where the experience of the tester is used to anticipate what defects might be present in the component or system under test as a result of errors made, and to design tests specifically to expose them."},
    {"chapter":1,"term":"Independence of Testing","definition":"Seperation of responsibilities, which encourages the accomplishment of objectve testing."},
    {"chapter":2,"term":"Commercial Off-The_Shelf (COTS)/Off-The_Shelf Software","definition":"A software product that is developed for the general market, i.e. for a large number of customers, and that is delivered to many customers in indentical format."},
    {"chapter":2,"term":"Iterative Development Model","definition":"A development lifecycle where a project is broken into a usually large number of iterations. An iteration is a coplete development loop resulting in a release (internal or external) of an executable product, a subset of the final product under development, which grows from iteration to iteration to become the final product."},
    {"chapter":2,"term":"Incremental Development Model","definition":"A development lifecycle where a project is broken into a series of increments, each of which delivers a portion of the functionality in the overall project requirements. The requriements are prioritized and delivered in priority order in the appropriate increment. In some (but not all) versions of this lifecycle model, each subproject follows a mini V-model with its own design, coding and testing phases."},
    {"chapter":2,"term":"Validation","definition":"Confirmation by examination and through provision of objective eveidence that the requirements for a specific intended use or application have been fulfilled."},
    {"chapter":2,"term":"Verification","definition":"Confirmation by examination and through provision of objective evidence that specific requirements have been fulfilled."},
    {"chapter":2,"term":"V-Model","definition":"A framework to describe the software development lifecycle activities from requirements specification to maintenance. The V-Model illustrates how testing activities can be integrated into each phase of the software development lifecycle."},
    {"chapter":2,"term":"Alpha Testing","definition":"Simulated or actual operational testing by potential user/customers or an independent test team at the developers' site, but outside the development organization."},
    {"chapter":2,"term":"Beta Testing/Field Testing","definition":"Operational testing by potential and/or existing users/customers at an external site not otherwise involved with the developers, to determine whether or not a component or system satisfies the user/customer needs and fits within the business processes. Often employed as a form of external acceptance testing for off-the-shelf software in order to acquire feedback from the market."}
];
let possibleAnswers=["A","B","C","D"];

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFlashCardPageData() {
    let pageData={};
    let ranFlashCard = -1;
    let getFlashCard=getRandomInt(0,chapterOneFlashCards.length-1);

    //Store Term
    pageData.term="";
    pageData.term=chapterOneFlashCards[getFlashCard].term;
    let FlashCardChapter = chapterOneFlashCards[getFlashCard].chapter;

    //let term = chapterOneFlashCards[getFlashCard].term;
    //let termElement=document.getElementById("term");
    //termElement.innerHTML=term;
    //3 additional defintions for the multiple choice section. 
    //Must be three unique numbers and must not include the actual answer.
    let fourDefinitions=[-1,-1,-1,-1];
    //Place the correct answer randomly in the defintions array.
    let offset=getRandomInt(0,3);
    fourDefinitions[offset]=getFlashCard;
    //Save the correct answer to compare against.
    pageData.correctAnswer=-1;
    pageData.correctAnswer=possibleAnswers[offset];
    //replace will be the offset where we put one of the three wrong definitions.
    let replace = 0;

    //Replace all -1 entries with a unique definition.
    while (fourDefinitions.indexOf(-1) !== -1) {
        ranFlashCard=getRandomInt(0,chapterOneFlashCards.length-1);
        //Definitions should be from the same chapter.
        if (FlashCardChapter !== chapterOneFlashCards[ranFlashCard].chapter) {
            continue;
        }
        //Already exists in array get another one.
        if (fourDefinitions.includes(ranFlashCard)) {
            continue;
        } else {
            //replace a -1 with this offset.
            replace = fourDefinitions.indexOf(-1);
            fourDefinitions[replace] = ranFlashCard;
        }
    }
    pageData.mc=[];
    pageData.mc[0]=chapterOneFlashCards[fourDefinitions[0]].definition;
    pageData.mc[1]=chapterOneFlashCards[fourDefinitions[1]].definition;
    pageData.mc[2]=chapterOneFlashCards[fourDefinitions[2]].definition;
    pageData.mc[3]=chapterOneFlashCards[fourDefinitions[3]].definition;

    return (pageData);
}

function correctSelection(answer) {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "The correct answer is " + answer;
    return;
}

function incorrectSelection(answer) {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "Incorrect, the correct answer is " + answer;
    return;
}

function clearSelection() {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    return;
}

//Term section
let fc = getFlashCardPageData();
let termElement=document.getElementById("term");
termElement.innerHTML=fc.term;
//MC section
let mcAElement=document.getElementById("A");
mcAElement.innerHTML=fc.mc[0];
let mcBElement=document.getElementById("B");
mcBElement.innerHTML=fc.mc[1];
let mcCElement=document.getElementById("C");
mcCElement.innerHTML=fc.mc[2];
let mcDElement=document.getElementById("D");
mcDElement.innerHTML=fc.mc[3];
// ARM mc buttons.
let aBtn = document.getElementById("aButton");
aBtn.addEventListener("click", function() {
    if (fc.correctAnswer === "A") {
        correctSelection(fc.correctAnswer);
    } else {
        incorrectSelection(fc.correctAnswer);
    }
});

let bBtn = document.getElementById("bButton");
bBtn.addEventListener("click", function() {
    if (fc.correctAnswer === "B") {
        correctSelection(fc.correctAnswer);
    } else {
        incorrectSelection(fc.correctAnswer);
    }
});

let cBtn = document.getElementById("cButton");
cBtn.addEventListener("click", function() {
    if (fc.correctAnswer === "C") {
        correctSelection(fc.correctAnswer);
    } else {
        incorrectSelection(fc.correctAnswer);
    }
});

let dBtn = document.getElementById("dButton");
dBtn.addEventListener("click", function() {
    if (fc.correctAnswer === "D") {
        correctSelection(fc.correctAnswer);
    } else {
        incorrectSelection(fc.correctAnswer);
    }
});

let anotherBtn = document.getElementById("another");
anotherBtn.addEventListener("click", function() {
    clearSelection();
    fc=getFlashCardPageData();
    //Term section
    termElement=document.getElementById("term");
    termElement.innerHTML=fc.term;
    //MC section
    mcAElement=document.getElementById("A");
    mcAElement.innerHTML=fc.mc[0];
    mcBElement=document.getElementById("B");
    mcBElement.innerHTML=fc.mc[1];
    mcCElement=document.getElementById("C");
    mcCElement.innerHTML=fc.mc[2];
    mcDElement=document.getElementById("D");
    mcDElement.innerHTML=fc.mc[3];
})
