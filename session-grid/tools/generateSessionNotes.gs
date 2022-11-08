function generateSessionNotes() {
    const sessionsSheet = SpreadsheetApp.openById("1oIRrU1rWakVxObhuYJhFNwe_BuKnkAtd1R_olz_Q040");
    const notesFolder = DriveApp.getFolderById("1CuVDNKvapchrmG7loCUROES51UnRz_i8F");
    const notesTemplate = DriveApp.getFileById("1Ac-MJDPErC1z3ppWEyNHsIXFacQ9QeHoFjEGybwKShE");

    const year = "2022"
    const prefix = "UKHC22"
    const sessionTimes = ["11:30", "12:20", "14:00", "14:50", "15:40"]
    const rooms = ["Lovelace", "Marmot", "Gawande", "Horton", "Main Space"]
    const roomCapacities = ["16", "16", "20", "25", "50"]

    sessionTimes.forEach(function (sessionTime, sessionIndex) {
        rooms.forEach(function (room, index) {
            docFile = notesTemplate.makeCopy(prefix + " Session Notes - S" + (sessionIndex + 1) + ": " + room, notesFolder);
            docFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
            docUrl = docFile.getUrl().replace("?usp=drivesdk", "");
            sessionsSheet.appendRow([year, sessionTime, (sessionIndex + 1), room, roomCapacities[index], "", "", "", "", "", docUrl]);
            console.log("S" + (sessionIndex + 1) + ": " + room + " - " + docUrl);
        });
    });
}