---
title: Automate all of MacOS configuration with Defaults&PlistBuddy, AppleScript and pmset
pubdate: 2020-03-09
---

* I wrote similar things [here](https://github.com/ryuta69/dotfiles/issues/5) in Japanese.

When I cleaning [dotfiles](https://github.com/ryuta69/dotfiles), I thought I could automate all macos configuration as well such as not only defaults simple command but also Dock applications. Then, I achieve that so I wrote it down here.

## defaults
If you develop with macos, you might have seen defaults command at least onse. The command below shows an configurations not to generate DS_STORE the Finder display setting files on Shared directory or USB.

```
defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
```

defaluts command is doing the reference, add, update, and delete on Mac system preferences like below.

```
defaults order[read(reference)/write(add/update)/delete(delete)] domain[Mac configuration items array. I wrote lists below] The valid setting items on domain[I wrote lists below] value[-Type Value] 
```

If you like to show all the list of domain, you could type like this.
```
defaults domains | sed 's/ /\n/g'
# alternative
ls ~/Library/Preferences | sed 's/.plist$//g'
```
As you see the second command, plist files under ~/Library/Preferences are the configuration files. They set those files in each user folders. Sometimes you have directory such as ByHost, and it controlos Trackpad or something relate to Hardware, you need to change the command like `defaults -currentHost write`. Some exceptions exist but this is the standard.

### check what configurations are assigned to plist
This is the hardest things on this way. Apple never opened the document about it, we need to find out by ourselves. There a site called defaults-write.com opens the list, however, they are too old and not fine with mojaves or latter. It doesn't list by category so hard to check, anyway.

Then I searched a hell and found out this repository.
https://github.com/tech-otaku/macos-config-mojave/blob/master/macos-config.sh

This was life-changing. I felt like I found the treasure and really influenced by this. I appreciate this that I have started everything from this repository. Although this repository doesn't give us a all informations such as Trackpad, this helps a lot to start by myself from here.

I need to search by myself so I choose this way. Changing some system preferences and search diff like this.

```
# rg is ripgrep, you can replace it with grep.
alias -G TA='> ~/work/temp/a.log'
alias -G TB='> ~/work/temp/b.log'
alias dflg='diff ~/work/temp/a.log ~/work/temp/b.log'
ls *.plist | defaults read -TA
ls *.plist | defaults read -TB
DPNT=dflg

ls | xargs -I % sh -c 'echo % && defaults read %' | rg '${DPNT}|plist'
```

It's stable and the finest way, I guess.

## 3 configurations which can't be done by defaults
For example, Energy Saver is not referenced and assign inside plist. These changes are set inside sfl2 which is binary files and can't be controlled. Also, Applications in Dock are not controllable because they are deeply nested dict. 

### pmset
Energy Saver can be controlled by pmset. It's a wrapper of macos configurations and compile it to sfl2.

```
pmset -c displaysleep 3
```

### PlistBuddy
Also defaults can't access deeper than 1 depth nest, while PlistBuddy can control any type of plist files.

```
/usr/libexec/PlistBuddy -c "Set :DesktopViewSettings:IconViewSettings:textSize 12" ~/Library/Preferences/com.apple.finder.plist
```

In this way, you can controll any structures like comibined with bash. You can grep to findout, or calculate the length of array, and for-index to add array with Plist.

https://github.com/ryuta69/dotfiles/blob/master/system/lib/dockitem.zsh

## AppleScript to set with GUI and impossible items on terminal
This is the hardest thing. I had written a [Selenium article](https://qiita.com/ryuta69/items/c84501993635c72540a7) before, beside it is similar as Automation of GUI scripting in MacOS.

Since you created the script, you can build an app with Automator, but it kind of not my goal to automate with CUI, so I skipped. They all will work with osascript.

### let's try just open system preferences
```
tell application "System Preferences"
	activate
end tell
```

Put this in Script Editor in default MacOS editor. You can name as test.applescript and exec as osascript, but it doesn't stdout data. You can shell command inside to print out, but it's allowed to exec shell command once in the script. (I didn't know about this )

Run it, and you'll be sure you are seeing System Preferences panel. You can command any Applications to boost with Applescript. Let's see General Preferences next.

```
tell application "System Preferences"
	activate
  reveal pane id "com.apple.preference.general"
end tell
```

Pane means a series of root System Preferenes. It's assined with domain as you look at its name. I will list all domains later, now let's go next step to control them.

```
tell application "System Preferences"
	activate
	reveal pane id "com.apple.preference.general"
end tell
tell application "System Events"
	tell application process "System Preferences"
		repeat while not (window 1 exists)
		end repeat
		tell window "General"
			tell pop up button 3
				delay 1
				click
			end tell
		end tell
	end tell
end tell
quit application "System Preferences"
```

Did you get the menu of default browser? A `System Events` is an integrated function of Applescript which could interactive control such as click or keytype on Activated elements.

### to list all the elements on applescript
It's life changing, and this is what I like to tell the most in this article.

pane
```
tell application "System Preferences"
	name of panes
end tell
```

anchor
```
tell application "System Preferences"
  reveal pane id "com.apple.preference.general"
  get name of every anchor
end tell
```

the items in active pane
```
tell application "System Preferences"
	activate
	reveal pane id "com.apple.preference.general"
end tell
tell application "System Events"
	tell application process "System Preferences"
		repeat while not (window 1 exists)
		end repeat
		tell window "General"
			every UI element
		end tell
	end tell
end tell
```

### let's make some scripts
You could choose default browser, and input sources with this.

https://github.com/ryuta69/dotfiles/tree/master/system/lib

GUI settings and third party applications are now able to automate, I now finally can say I automate everything on MacOS.

## summary
I'm now confident with this script. I searched every other's script allday and everyday, and enhance myown for two month.

Now I can use script editor, and select domains to search with it, but at first time there is no document, so I was struggling with a few informations and about core settings which is really hard to find. But those times are kind of fun and I really got enthusiatic about it.

After all, I found myself really is a kind of person who is motivated with **effective production**. I used to speedrun gamers, and that time is like I didn't sleep, eat or talk with anyone. I got really absorbed in it and make script with it and find a bug to make breakthrough.....all for making time short, not dependence on people(make rule and reproductive), and beautiful to be proud. Now, I'm programmer and doing kind of similar thing.

It's like studying others deeply, forget anything but itself, not sleeping nore eating, think how to appeal myself and beautiful, and make it reproductive and limit of effective to say this is perfect.
